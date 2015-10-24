var assert = require('assert');

describe('Tests unitarios metroruta df api', function(){
  it('construir lineas con estaciones', function(){
    var lineas = Linea.findAll();
    var lineasAssert = [
    ];
    assert.equal(lineas, lineasAssert);
  });
  
  it('buscar estacion', function(){
    var estacion = Estacion.findAll();
    var estacionAssert = [
    ];
    assert.equal(estacion, estacionAssert);
  });
  
  it('buscar linea por id', function(){
    var linea = Linea.find(2);
    var lineaAssert = [
    ];
    assert.equal(linea, lineaAssert);
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
    assert.equal(false, true);
  });
  
  it('convertir a radianes', function(){
    assert.equal(false, true);
  });
  
  it('determinar direccion basado en estaciones', function(){
    assert.equal(false, true);
  });
  
  it('construir puntos de ruta', function(){
    assert.equal(false, true);
  });
  
  it('construir ruta', function(){
    assert.equal(false, true);
  });
  
  it('calcular tiempo de ruta con base en distancia entre estaciones', function(){
    assert.equal(false, true);
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
  
})
