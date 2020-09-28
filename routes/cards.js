const router = require('express').Router();
const path = require('path');

const cardsJson = require(path.join(__dirname, '../data/cards.json'));

router.get('/cards', (req, res) => { // card req
  res.send(cardsJson);
});

module.exports = router;