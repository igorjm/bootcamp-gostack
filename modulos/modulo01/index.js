const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/:1
// Request body = { "name": "Igor", "email": "igor@gmail.com" }

server.get('/users', (req, res) => {
  const name = req.query.name;

  return res.json({ message : `Hello ${name}` });
});

server.get('/users/:id', (req, res) => {
  const id = req.params.id;

  return res.json({ message : `ID: ${id}` });
});



server.listen(3000);