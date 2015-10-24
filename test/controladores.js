var request = require('dupertest');
    
describe('Tests unitarios controllers', function(){
  it('controller lineas', function() {
    var lineasAssert = [{
      id:1,
      nombre:'L\u00ednea 1',
      colorHex:'F54A91',
      icono:'imgs\/iconosLineas\/1.png',
      'estaciones':[{
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
        nombre:'Juanacatl\u00e1n',
        latitud:19.412901,
        longitud:-99.182198,
        icono:'imgs\/iconosEstaciones\/70.png'
      }]
    }, {
      id:2,
      nombre:'L\u00ednea 2',
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
    }];
    request(controladores.mostrarLineas)
    .end(function(response) {
      expect(response).toEqual(lineasAssert);
      done();
    });
  });
  
  it('controller linea por id', function(){
    var lineaAssert = {
      id:1,
      nombre:'L\u00ednea 1',
      colorHex:'F54A91',
      icono:'imgs\/iconosLineas\/1.png',
      'estaciones':[{
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
        nombre:'Juanacatl\u00e1n',
        latitud:19.412901,
        longitud:-99.182198,
        icono:'imgs\/iconosEstaciones\/70.png'
      }]
    };
    request(controladores.buscarLineaPorId)
    .params({id: 1})
    .end(function(response) {
      expect(response).toEqual(lineaAssert);
      done();
    });
  });
  
  it('controller estaciones', function(){
    var estacionesAssert = [{
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
      nombre:'Juanacatl\u00e1n',
      latitud:19.412901,
      longitud:-99.182198,
      icono:'imgs\/iconosEstaciones\/70.png'
    },{
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
    }];
    request(controladores.mostrarEstaciones)
    .params({id: 10})
    .end(function(response) {
      expect(response).toEqual(estacionesAssert);
      done();
    });
  });
  
  it('controller estacion por id', function(){
    var estacionAssert = {
      id:126,
      nombre:'Tacuba',
      latitud:19.459499,
      longitud:-99.188698,
      icono:'imgs\/iconosEstaciones\/126.png'
    };
    request(controladores.buscarEstacionPorId)
    .params({id: 10})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });
  
  it('controller estacion por latlon referencia', function(){
    var estacionAssert = [];
    request(controladores.buscarEstacionesCercanas)
    .params({latlon: '19.42705,-99.27571'})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });

  it('controller calcular ruta', function(){
    var estacionAssert = [];
    request(controladores.calcularRuta)
    .params({origen: 19, destino: 99})
    .end(function(response) {
      expect(response).toEqual(estacionAssert);
      done();
    });
  });
})
