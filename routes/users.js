const router = require('express').Router();
const path = require('path');

const userJson = require(path.join(__dirname, '../data/users.json'));

router.get('/users', (req, res) => { // users req
  res.send(userJson);
});

router.get('/users/:id', (req, res) => { // Id req
  const {
    id
  } = req.params;

  let access = false;
  let userInfo;

  for (let i = 0; i < userJson.length; i++) {
    if (id == userJson[i]._id) {
      userInfo = userJson[i];
      access = true;
    }
  }

  if (!access) {
    res.status(404).send(JSON.stringify({
      "message": "Нет пользователя с таким id"
    }));
  } else if (access) {
    res.status(200).send(userInfo);
  }

  return;
});

module.exports = router; // экспортировали роутер