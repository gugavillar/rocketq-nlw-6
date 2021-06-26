const express = require('express');
const route = express.Router();
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

route.get('/', (req, res) => res.render('index', { page: 'enter-room' })); //criar uma nova rota
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);

route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);


module.exports = route; //exportar modulo