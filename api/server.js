const express = require('express');
const db = require('../data/config/dbConfig.js');

const gamesRouter = require('../data/routes/game-routes.js');

const server = express();

server.use(express.json());
server.use('/api', gamesRouter);

server.get('/', (req, res) => {
  res.send(`Server's live, bub.`);
});

module.exports = server;