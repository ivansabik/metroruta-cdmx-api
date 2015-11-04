var assert = require('assert')
  , expect = require('chai').expect
  , Linea = modelos = require('../lib/modelos').Linea;

describe('Tests unitarios metroruta df api', function(){
  it('construir lineas con estaciones', function(done){
    var lineasAssert = [{
      id:1,
      nombre:'Linea 1',
      colorHex:'F54A91',
      icono:'iconos/lineas/1.png',
      'estaciones':[{
        id:95,
        nombre:'Observatorio',
        latitud:19.398551,
        longitud:-99.200449,
        icono:'iconos/estaciones/95.png'
      },{
        id:127,
        nombre:'Tacubaya',
        latitud:19.403200,
        longitud:-99.187103,
        icono:'iconos/estaciones/127.png'
      },{
        id:70,
        nombre:'Juanacatl\u00e1n',
        latitud:19.412901,
        longitud:-99.182198,
        icono:'iconos/estaciones/70.png'
      }]
    }, {
      id:2,
      nombre:'Linea 2',
      colorHex:'0164A8',
      icono:'iconos/lineas/2.png',
      estaciones:[{
        id:38,
        nombre:'Cuatro Caminos',
        latitud:19.459600,
        longitud:-99.215897,
        icono:'iconos/estaciones/38.png'
      },{
        id:98,
        nombre:'Panteones',
        latitud:19.458799,
        longitud:-99.203201,
        icono:'iconos/estaciones/98.png'
      },{
        id:126,
        nombre:'Tacuba',
        latitud:19.459499,
        longitud:-99.188698,
        icono:'iconos/estaciones/126.png'
      }]
    }];
    Linea.find({}).lean().exec(function (err, lineas) {
      if (err) throw err;
      expect(lineas).to.deep.equal(lineasAssert);
      done();
    });
  });
  
  it('buscar estacion', function(){
    var estacion = Estacion.find();
    var estacionAssert = [
    ];
    assert.deepEqual(estacion, estacionAssert);
  });
  
  it('buscar linea por id', function(done){
    var lineaAssert = {
      id:2,
      nombre:'Linea 2',
      colorHex:'0164A8',
      icono:'iconos/lineas/2.png',
      estaciones:[{
        id:38,
        nombre:'Cuatro Caminos',
        latitud:19.459600,
        longitud:-99.215897,
        icono:'iconos/estaciones/38.png'
      },{
        id:98,
        nombre:'Panteones',
        latitud:19.458799,
        longitud:-99.203201,
        icono:'iconos/estaciones/98.png'
      },{
        id:126,
        nombre:'Tacuba',
        latitud:19.459499,
        longitud:-99.188698,
        icono:'iconos/estaciones/126.png'
      }]
    };
    Linea.findOne({ id: 2 }).lean().exec(function (err, linea) {
      delete linea._id;
      delete linea.__v;
      linea.estaciones.forEach(function(estacion){
        delete estacion._id;
      });
      if (err) throw err;
      expect(linea).to.deep.equal(lineaAssert);
      done();
    });
  });
    
  it('construir grafo del metro', function(){
    var metro = new Metro();
    var grafo = metro.grafoRed;
    var grafoAssert = [
    ];
    assert.equal(grafo, grafoAssert);
  });
  
  it('calcular ruta mas corta', function(){
    var metro = new Metro();
    var ruta = metro.calculaRuta(3, 55);
    var rutaAssert = [
    ];
    assert.equal(ruta, rutaAssert);
  });
  
  it('buscar estaciones cercanas', function(){
    var LAT = 0;
    var LON = 0;
    var estacion = Estacion.cercanas(LAT, LON);
    var estacionAssert = [
    ];
    assert.equal(estacion, estacionAssert);
  });
  
  it('calcular distancia entre dos puntos latlon', function(){
    var LAT = 0;
    var LON = 0;
    var distancia = Dijkstra.distancia(LAT, LON);
    assert.equal(distancia, 0.0);
  });
  
  it('construir puntos de ruta', function(){
    var dijkstra = new Dijkstra(1,6);
    var puntosRuta = dijkstra.puntosRuta;
    var puntosRutaAssert = [];
    assert.equal(puntosRuta, puntosRutaAssert);
  });
  
  it('construir ruta', function(){
    var dijkstra = new Dijkstra(1,6);
    var ruta = dijkstra.ruta;
    var rutaAssert = [];
    assert.equal(ruta, rutaAssert);
  });
  
  it('calcular tiempo de ruta con base en distancia entre estaciones', function(){
    var dijkstra = new Dijkstra(1,6);
    var VELOCIDAD_PROMEDIO = 600;
    var TIEMPO_ENTRE_PARADAS = 0.35;
    var tiempoRuta = dijkstra.tiempoRuta(VELOCIDAD_PROMEDIO, TIEMPO_ENTRE_PARADAS);
    assert.equal(tiempoRuta, 0.00);
  });
  
  it('calcular velocidad promedio', function(){
    var metro = new Metro();
    assert.equal(metro.velocidad(), 600);
  });
  
  it('calcular tiempo entre paradas', function(){
    var metro = new Metro();
    assert.equal(metro.tiempoParadas(), 0.35);
  });
  
  it('calcular numero de estaciones en toda la red de metro', function(){
    var metro = new Metro();
    assert.equal(metro.numEstaciones(), 175);
  });
  
  it('construir tramos ruta', function(){
    var dijkstra = new Dijkstra(1,6);
    var tramos = dijkstra.tramos;
    var tramosAssert = [];
    assert.equal(tramos, tramosAssert);
  });
  
  it('construir transbordos ruta', function(){
    var dijkstra = new Dijkstra(1,6);
    var transbordos = dijkstra.transbordos;
    var transbordosAssert = [];
    assert.equal(transbordos, transbordosAssert);
  });
  
})
