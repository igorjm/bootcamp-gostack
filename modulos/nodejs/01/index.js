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

// Middleware GLOBAL
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Method ${req.method}; URL ${req.url}`);
  return next();
  console.timeEnd('Request');
});

// Middleware LOCAL
function checkUserExists(req, res, next) {
  if(!req.body.name) return res.status(400).json({ error: 'User not found on request body' });
  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if(!user) return res.status(400).json({ error: 'User does not exists' });
  req.user = user;
  return next();
}

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
});

// LIST ALL
server.get('/users', (req, res) => {
  return res.json(users);
});

// CREATE
server.post('/users', checkUserExists, (req, res) => {
  const {name} = req.body;
  users.push(name);
  return res.json(users);
});

// EDIT
server.put('/users/:index', checkUserExists, checkUserInArray, (res, req) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

// DELETE
server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send(200);
});

server.listen(3000);