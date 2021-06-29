const express = require('express');
const route = require('./route');
const path = require('path');
const server = express();
server.set('view engine', 'ejs'); //setar a engine ejs
server.use(express.static('public')); //pedir pro servidor usar a pasta public para arquivos estaticos
server.set('views', path.join(__dirname, 'views')); //modificar o caminho da pasta views
server.use(express.urlencoded({ extended: true })); //ativação do middleware
server.use(route); //pedir pro servidor usar o arquivo route
server.listen(3000, () => console.log('RODANDO')); // iniciar o servidor