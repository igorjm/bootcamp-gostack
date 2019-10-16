const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/:1
// Request body = { "name": "Igor", "email": "igor@gmail.com" }

server.get('/users/name', (req, res) => {
  const name = req.query.name;
  return res.json({ message : `Hello ${name}` });
});

server.get('/users/:id', (req, res) => {
  const id = req.params.id;
  return res.json({ message : `ID: ${id}` });
});

const users = ['Igor', 'Cleber'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

// LIST ALL
server.get('/users', (req, res) => {
  return res.json(users);
});

// CREATE
server.post('/users', (req, res) => {
  const {name} = req.body;
  users.push(name);
  return res.json(users);
});

// EDIT
server.put('/users/:index', (res, req) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

// DELETE
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send(200);
})

server.listen(3000);