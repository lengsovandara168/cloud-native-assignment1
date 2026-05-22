const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
let registeredUsers = [];
// 1. Registration service - POST method
app.post("/api/register", (req, res) => {
  res
    .status(201)
    .json({ message: "User registered successfully", data: req.body });
});

// 2. Login service - POST method
app.post("/api/login", (req, res) => {
  res
    .status(200)
    .json({ message: "User logged in successfully", user: req.body.username });
});

// 3. Search service - GET method
app.get("/api/search", (req, res) => {
  res.status(200).json({ message: `Search results for: ${req.query.q}` });
});

// 4. Profile update service - PUT method
app.put("/api/profile/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Profile ${req.params.id} updated`, data: req.body });
});

// 5. Delete user service - DELETE method
app.delete("/api/user/:id", (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} deleted` });
});

// 6. Run the services locally
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
