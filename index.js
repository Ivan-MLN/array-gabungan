const { send } = require('micro');
const { createServer } = require('http');
const express = require('express');

const app = express();
app.use(express.static('.'));

app.get('/', (req, res) => {
  send(res, 200, 'Hello from Express.js on Vercel!');
});

const server = createServer(app);

module.exports = server;
