const router = require('express').Router();
// const path = require('path');
const fs = require('fs').promises;

// const cardsJson = (path.join(__dirname, '../data/cards.json'));

router.get('/cards', (req, res) => { // card req
  fs.readFile('./data/cards.json', 'utf8')
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.status(500).send(JSON.stringify({
      message: 'Запрашиваемый ресурс не найден',
    })));
});

module.exports = router;
