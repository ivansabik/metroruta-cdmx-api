var tungus = require('tungus')
, mongoose = require('mongoose');

mongoose.connect('tingodb://../db')

var Schema = mongoose.Schema;

var lineaSchema = Schema({
  nombre: String,
  colorHex: String,
  iconoBase64: String,
  estaciones: [{
    nombre: String,
    latitud: Number,
    longitud: Number,
    iconoBase64: String,
  }]
})

var Linea = mongoose.model('Linea', lineaSchema);

Linea.find(function (err, lineas) {
  if (err) throw err;
  console.log(lineas[0]);
})
