const express = require('express');
const games = require('../data/models/game-models.js');
const db = require('../data/config/dbConfig.js');

const server = express();
server.use(express.json());

server.get('/games', async (req, res) => {
  games
    .find()
    .then(newGames => {
      res.status(200).json(newGames);
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

server.get('/games', async (req, res) => {
  const rows = await games.find();
  res.status(200).json(rows);
});

server.post('/games', (req, res) => {
  const game = req.body;
  const { title, genre } = game;

  if (title && genre) {
    games
      .add(game)
      .then(newGame => {
        res.status(201).json(newGame);
      }) 
      .catch(err => {
        res.status(500).json({ message: `Failed to add the new game: ${err}` });
      });
  } else if (!title) {
    res.status(422).json({ message: `Please provide a game title to save your submission.` });
  } else if (!genre) {
    res.status(422).json({ message: `Please provide a game genre to save your submission.` });
  } else {
    res.status(500).json({ message: `${err}` });
  };
});

server.get('/', (req, res) => {
  res.send(`Server's live, bub.`);
});

module.exports = server;