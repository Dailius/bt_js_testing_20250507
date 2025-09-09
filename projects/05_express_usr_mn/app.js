const express = require("express");

const port = 3011;
const app = express();
const usersList = [
  { id: 1, username: "Onute", email: "onute@gmail.com" },
  { id: 2, username: "Birute", email: "birute@gmail.com" },
  { id: 3, username: "Petras", email: "petras@demo.com" },
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
