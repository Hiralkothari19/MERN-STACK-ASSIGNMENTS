// backend/server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample GET route for welcome message
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Dummy in-memory users array
let users = [];

// Routes for CRUD operations on users
app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const { id, name, email } = req.body;
  users.push({ id, name, email });
  res.status(201).json({ message: 'User added' });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id === id);
  if (user) {
    user.name = name;
    user.email = email;
    res.json({ message: 'User updated' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
