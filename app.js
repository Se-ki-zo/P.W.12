const express = require('express');

const {
  PORT = 3000
} = process.env;

const usersId = [{
    "name": "Ada Lovelace",
    "about": "Mathematician, writer",
    "avatar": "https://www.biography.com/.image/t_share/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg",
    "_id": "dbfe53c3c4d568240378b0c6"
  },
  {
    "name": "Tim Berners-Lee",
    "about": "Inventor, scientist",
    "avatar": "https://i.guim.co.uk/img/media/a963fde3d11ae01cb8eaf84b516ee53446406397/809_402_5801_3481/master/5801.jpg?width=1200&quality=85&auto=format&fit=max&s=809c335ce5ca3239fedfaf9e1b61dba6",
    "_id": "d285e3dceed844f902650f40"
  },
  {
    "name": "Alan Kay",
    "about": "Computer scientist",
    "avatar": "https://cdn.cultofmac.com/wp-content/uploads/2013/04/AlanKay.jpg",
    "_id": "7d8c010a1c97ca2654997a95"
  },
  {
    "name": "Alan Turing",
    "about": "Mathematician, cryptanalyst",
    "avatar": "https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg",
    "_id": "f20c9c560aa652a72cba323f"
  },
  {
    "name": "Bret Victor",
    "about": "Designer, engineer",
    "avatar": "https://postlight.com/wp-content/uploads/2018/03/109TC-e1535047852633.jpg",
    "_id": "8340d0ec33270a25f2413b69"
  },
  {
    "name": "Douglas Engelbart",
    "about": "Engineer, inventor",
    "avatar": "https://images.fineartamerica.com/images-medium-large-5/douglas-engelbart-emilio-segre-visual-archivesamerican-institute-of-physics.jpg",
    "_id": "3c8c16ee9b1f89a2f8b5e4b2"
  }
];

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => { // root/test
  res.redirect('http://localhost:3000');
});

app.get('/cards', (req, res) => { // card req
  app.use(express.static(__dirname));
  res.redirect('http://localhost:3000/data/cards.json');
});

app.get('/users', (req, res) => { // users req
  app.use(express.static(__dirname));
  res.redirect('http://localhost:3000/data/users.json');
});

app.get('/users/:id', (req, res) => { // bad ID // ERR! - нужно подтягивать с локалки данные из users.json
  if (req.params.id == usersId[0]._id) {
    res.status(200).send(JSON.stringify({
      "message": "окок"
    })); 
  } else {
    res.status(404).send(JSON.stringify({
      "message": "Нет пользователя с таким id"
    }));
  }
});

app.get('/:unknown', (req, res) => { // bad url
  res.status(404).send(JSON.stringify({
    "message": "Запрашиваемый ресурс не найден"
  }));
});


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
