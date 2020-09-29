const express = require('express');

const {
  PORT = 3000,
} = process.env;
const app = express();

const cards = require('./routes/cards.js'); // TEST
const users = require('./routes/users.js'); // TEST
const otherReq = require('./routes/other.js'); // TEST

app.use('', express.static(`${__dirname}/public`));

app.use('/', cards); // TEST
app.use('/', users); // TEST
app.use('/', otherReq); // TEST

app.listen(PORT, () => {
  console.log(`
  ======================
  Server has been started.
  ======================
  Current port: [ ${PORT} ].
  ======================
  Current time [ ${new Date().getHours()}:${new Date().getMinutes()} ]
  ======================
  Enjoy this crap. :)
  ======================
  `);
});
