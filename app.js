const express = require('express');
// Слушаем 3000 порт
const {
  PORT = 3000
} = process.env;

const app = express();

app.use(express.static('public')); // раздаем статику
//app.use(express.static(__dirname + '/public')); // теперь клиент имеет доступ только к публичным файлам // test

// app.get('/', (req, res) => { // ???
//   res.send();
// });

app.listen(PORT, () => { // need
  console.log(`App listening on port ${PORT}`);
});
