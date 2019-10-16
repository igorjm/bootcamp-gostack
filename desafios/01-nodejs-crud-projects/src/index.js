const express = require('express');
const server = express();

const routes = require('./routes');

// Middleware GLOBAL
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Method ${req.method}; URL ${req.url}`);
  return next();
  console.timeEnd('Request');
});

server.use(express.json());
server.use(routes);

server.listen(3000);