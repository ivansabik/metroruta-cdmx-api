var tungus = require('tungus')
, mongoose = require('mongoose');

mongoose.connect('tingodb://../test/db')

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

exports.Linea = Linea;
