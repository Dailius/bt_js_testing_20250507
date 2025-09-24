const express = require("express");
const envr = require("./config/env");
const pool = require("./config/db");
const initializeDb = require("./utils/dbinit");
const { hashPassword, comparePassword } = require("./utils/hash");
const { generateToken, verifyToken } = require("./utils/jwt");

const app = express();
// const port = envr.APP_PORT;
const port = process.env.APP_PORT;

app.use(express.json());

const resEnvData = (req, res) => {
  res.status(200).json({
    appPort: envr.APP_PORT,
    dbhost: envr.DB_HOST,
    dbUser: envr.DB_USER,
    dbPassword: envr.DB_PASSWORD,
    dbName: envr.DB_NAME,
    dbPort: envr.DB_PORT,
    jwtSecret: envr.JWT_SECRET,
  });
};

const validateUsernameLength = (username) =>
  username.length >= 3 && username.length <= 35;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (password) =>
  password.length >= 8 && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);

const setUpError = (message, code) => {
  const error = new Error(message);
  error.statusCode = code;
  return error;
};

initializeDb();

app.get("/", resEnvData);

app.post("/v1/user", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw setUpError("Username, email and password are mandatory.", 400);
    }

    const newUser = {
      username: username.trim(),
      email: email.trim(),
      password: password,
    };

    if (!validateUsernameLength(newUser.username)) {
      throw setUpError("User name length must be between 3 and 35", 400);
    }

    if (!validateEmail(newUser.email)) {
      throw setUpError("Invalid email format", 400);
    }

    if (!validatePassword(newUser.password)) {
      throw setUpError(
        `Incorrect password: ${newUser.password}. Should be at least 8 symbols, contains [A-Z,a-z,0-9]`,
        400
      );
    }

    const result = await pool.query(
      `
        INSERT INTO users(user_name, email, password)
            VALUES ($1, $2, $3)
            RETURNING *;
        `,
      [newUser.username, newUser.email, await hashPassword(newUser.password)]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: result.rows[0].user_id,
        username: result.rows[0].user_name,
        email: result.rows[0].email,
        created_at: result.rows[0].created_at,
        updated_at: result.rows[0].updated_at,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

app.post("/v1/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw setUpError("Incorrect username or password", 401);
    }

    const result = await pool.query(
      `
        SELECT user_id, user_name, password 
        FROM users WHERE user_name = $1
        `,
      [username]
    );

    const hashedPassword = result.rows[0].password;
    const isCorrectPassword = comparePassword(password, hashedPassword);

    if (!isCorrectPassword) {
      throw setUpError("Invalid user name or password", 401);
    }

    res.status(200).json({
      message: "Successful login",
      userId: result.rows[0].user_id,
      username: result.rows[0].user_name,
      token: generateToken({
        userId: result.rows[0].user_id,
        username: result.rows[0].user_name,
      }),
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

app.get("/v1/user", async (req, res) => {
  try {
    const tokenAuth = req.headers.authorization?.split(" ")[1];
    const tokenHeaders = req.headers.my_token;

    if (tokenAuth) {
        req.user = verifyToken(tokenAuth)
    } else if (tokenHeaders) {
        req.user = verifyToken(tokenHeaders)
    } else {
      throw setUpError("Token require", 400);
    }

    const result = await pool.query(
      `
        SELECT user_id, user_name, email 
        FROM users WHERE user_name = $1
        `,
      [req.user.username]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
