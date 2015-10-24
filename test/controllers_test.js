var request = require('dupertest');
    
describe('Tests unitarios controllers', function(){
  it('controller lineas', function() {
    var lineasAssert = [];
    request(controllers.mostrarLineas)
    .end(function(response) {
      expect(response).toEqual(lineasAssert);
      done();
    });
  });
  
  it('controller linea por id', function(){
    var lineaAssert = [];
    request(controllers.buscarLineaPorId)
    .params({id: 1})
    .end(function(response) {
      expect(response).toEqual(lineaAssert);
      done();
    });
  });
  
  it('controller estaciones', function(){
    var estacionesAssert = [];
    request(controllers.mostrarEstaciones)
    .params({id: 10})
    .end(function(response) {
      expect(response).toEqual(estacionesAssert);
      done();
    });
  });
  
  it('controller estacion por id', function(){
    var estacionAssert = [];
    request(controllers.buscarEstacionPorId)
    .params({id: 10})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });
  
  it('controller estacion por latlon referencia', function(){
    var estacionAssert = [];
    request(controllers.buscarEstacionesCercanas)
    .params({cercanas: '19.42705,-99.27571'})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });

  it('controller calcular ruta', function(){
    var estacionAssert = [];
    request(controllers.calcularRuta)
    .params({origen: 19, destino: 99})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });
})
