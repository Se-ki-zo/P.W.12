const router = require('express').Router();
const fs = require('fs').promises;

const userJson = require('../data/users.json');

router.get('/users', (req, res) => { // users req
  fs.readFile('./data/users.json', 'utf8')
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.status(500).send(JSON.stringify({
      message: 'Запрашиваемый ресурс не найден',
    })));
});

router.get('/users/:id', (req, res) => { // Id req
  const {
    id,
  } = req.params;

  let access = false;
  let userInfo;

  for (let i = 0; i < userJson.length; i += 1) {
    if (id === userJson[i].id) {
      userInfo = userJson[i];
      access = true;
    }
  }

  if (!access) {
    res.status(404).send(JSON.stringify({
      message: 'Нет пользователя с таким id',
    }));
  } else if (access) {
    res.status(200).send(userInfo);
  }
});

module.exports = router;
