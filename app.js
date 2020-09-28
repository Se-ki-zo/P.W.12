const express = require('express');
const fs = require('fs');
const path = require('path');
const {
  PORT = 3000
} = process.env;
const app = express();

const cards = require(path.join(__dirname + '/routes', 'cards.js'));  // TEST
const users = require(path.join(__dirname + '/routes', 'users.js'));  // TEST
const otherReq = require(path.join(__dirname + '/routes', 'other.js'));  // TEST


app.use('/', cards); // TEST
app.use('/', users); // TEST
app.use('/', otherReq); // TEST


app.use('', express.static(__dirname + '/public'));


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
