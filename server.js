var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var parser = require('body-parser');


var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs = require('fs-extra');


var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'plantilla'
}));
app.set('view engine', 'handlebars');

const pg = require('pg');
pg.defaults.ssl=true;

app.use(parser.json()); // for parsing application/json
app.use(parser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.render('partials/home');
});
app.get('/index', function (req, res) {
    res.render('partials/home');
});
app.get('/verHistoria', function (req, res) {
    res.render('partials/paginas/verHistoria');
});
app.get('/crearCuento', function (req, res) {
    res.render('partials/paginas/crearCuento');
});
app.get('/editarCuento', function (req, res) {
    res.render('partials/paginas/editarCuento');
});
app.get('/verUsuarios', function (req, res) {
    res.render('partials/paginas/verUsuarios');
});
app.get('/Usuario', function (req, res) {
    res.render('partials/paginas/Usuario');
});
app.get('/nuevoUsuario', function (req, res) {
    res.render('partials/paginas/nuevoUsuario');
});


app.listen(process.env.PORT || 8080, function(){console.log("corriendo servidor");});