const router = require('express').Router();
const Games = require('../models/game-models.js');

router.get('/games/', async (req, res) => {
  Games
    .find()
    .then(newGames => {
      res.status(200).json(newGames);
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

router.get('/games/', async (req, res) => {
  const rows = await games.find();
  res.status(200).json(rows);
});

router.post('/games/', (req, res) => {
  const game = req.body;
  const { title, genre } = game;

  if (title && genre) {
    Games
      .add(game)
      .then(newGame => {
        res.status(200).json(newGame);
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

module.exports = router;