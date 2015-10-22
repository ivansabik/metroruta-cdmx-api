var express = require('express');
var app = express();

app.get('/linea', function (req, res) {
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'Endpoint no existe'});
});

app.get('/linea/:id', function (req, res) {
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'Endpoint no existe'});
});

app.get('/estacion', function (req, res) {
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'Endpoint no existe'});
});

app.get('/estacion/:id', function (req, res) {
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'Endpoint no existe'});
});

app.use(function(req, res){
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'Endpoint no existe'});
});

app.listen(3000, function () {
  console.log('Express ist hier');
});
