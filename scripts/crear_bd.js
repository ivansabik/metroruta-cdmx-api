// Llena bd con lineas y estaciones
var tungus = require('tungus')
, mongoose = require('mongoose')
, lineasJs = require('./array_lineas').arrayLineas;

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

// Bulk se implementa en la v4 de mongoose pero tungus usa 3
// http://stackoverflow.com/questions/10266512/how-can-i-save-multiple-documents-concurrently-in-mongoose-node-js

var total = lineasJs.length
  , result = [];

function _saveAll() {
  var lineaJs = lineasJs.pop();
  var linea = new Linea({
    nombre: lineaJs.nombre,
    colorHex: lineaJs.colorHex,
    iconoBase64: lineaJs.icono
  });
  
  var estaciones = [];
  lineaJs.estaciones.forEach(function(estacion) {
    estaciones.push(estacion);
  });
  linea.estaciones = estaciones;
  
  linea.save(function(err, saved){
    if (err) throw err;
    result.push(saved[0]);
    if (--total) _saveAll();
  })
}

_saveAll();
