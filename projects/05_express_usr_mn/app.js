const express = require("express");

const port = 3011;
const app = express();
const usersList = [
  { id: 1, username: "Onute", email: "onute@gmail.com", password: "Onute1" },
  { id: 2, username: "Birute", email: "birute@gmail.com", password: "Birute2" },
  { id: 3, username: "Petras", email: "petras@demo.com", password: "Petras3" },
];

const db = { maxid: 3, users: usersList };

app.use(express.json());

// http://localhost:3011
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// http://localhost:3011/user
app.get("/user", (req, res) => {
  res.status(200).json(db.users);
});

// http://localhost:3011/user/1
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const userDetails = db.users.find((user) => user.id === +id);

  if (!userDetails) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(userDetails);
});

app.post("/user", (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email and password are mandatory." });
    }

    const newUser = {
      id: db.maxid + 1,
      username: username.trim(),
      email: email.trim(),
      password: password,
    };

    // username must be unique
    if (db.users.find((user) => user.username === newUser.username)) {
      return res.status(409).json({ message: "Username already exist." });
    }

    // username length max 35
    if (newUser.username.length > 35) {
      return res.status(400).json({ message: "Max username length is 35." });
    }

    // appropriate mail format
    if (!newUser.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // password length min 8
    if (newUser.password.length < 8) {
      return res
        .status(400)
        .json({ message: "Invalid password, min length should be 8" });
    }

    db.users.push(newUser);
    db.maxid = newUser.id;

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ "error message": error.message });
  }
});

app.post("/login", (req, res) => {
  const reqBody = req.body;

  if (!reqBody.username || !reqBody.password) {
    return res.status(401).json({ message: "Incorrect username or password" });
  }

  const userDetails = db.users.find(
    (user) => user.username === reqBody.username
  );

  if (!userDetails || userDetails.password != reqBody.password) {
    return res.status(401).json({ message: "Incorrect username or password" });
  }

  res.status(200).json({
    message: "Access granted",
    username: userDetails.username,
  });
});

// new request -> update user details
// {{baseUrl}}/user/:id
// http method: patch

// new request -> delete user
// {{baseUrl}}/user/:id
// http method: delete

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
