// Llena bd con lineas y estaciones de prueba sin acentos ni caracteres raros
var tungus = require('tungus')
, mongoose = require('mongoose')
, lineasJs = require('./array_lineas').arrayLineas;

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

// Linea 1
var linea1 = new Linea({
  id:1,
  nombre:'Linea 1',
  colorHex:'F54A91',
  icono:'imgs\/iconosLineas\/1.png',
  estaciones:[{
    id:95,
    nombre:'Observatorio',
    latitud:19.398551,
    longitud:-99.200449,
    icono:'imgs\/iconosEstaciones\/95.png'
  },{
    id:127,
    nombre:'Tacubaya',
    latitud:19.403200,
    longitud:-99.187103,
    icono:'imgs\/iconosEstaciones\/127.png'
  },{
    id:70,
    nombre:'Juanacatlan',
    latitud:19.412901,
    longitud:-99.182198,
    icono:'imgs\/iconosEstaciones\/70.png'
  }]
});

// Linea 2
var linea2 = new Linea({
  id:2,
  nombre:'Linea 2',
  colorHex:'0164A8',
  icono:'imgs\/iconosLineas\/2.png',
  estaciones:[{
    id:38,
    nombre:'Cuatro Caminos',
    latitud:19.459600,
    longitud:-99.215897,
    icono:'imgs\/iconosEstaciones\/38.png'
  },{
    id:98,
    nombre:'Panteones',
    latitud:19.458799,
    longitud:-99.203201,
    icono:'imgs\/iconosEstaciones\/98.png'
  },{
    id:126,
    nombre:'Tacuba',
    latitud:19.459499,
    longitud:-99.188698,
    icono:'imgs\/iconosEstaciones\/126.png'
  }]
});

linea1.save(function (err) {
  console.log('listo linea 1 test');
  linea2.save(function (err) {
    console.log('listo linea 2 test');
  });
});
