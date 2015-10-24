var frisby = require('frisby');

frisby.create('Obtener listado de lineas')
  .get('/lineas')
  .expectJSON([
    {
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
    },{
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
    }])
  .toss();
  
frisby.create('Obtener linea por id')
  .get('/linea?id=1')
  .expectJSON({
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
  }).toss();
  
frisby.create('Obtener listado de estaciones')
  .get('/estaciones')
  .expectJSON([{
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
  }])
  .toss();
  
frisby.create('Obtener estacion por id')
  .get('/estacion?id=100')
  .expectJSON({
    id:126,
    nombre:'Tacuba',
    latitud:19.459499,
    longitud:-99.188698,
    icono:'imgs\/iconosEstaciones\/126.png'
  })
  .toss();
  
frisby.create('Obtener estaciones cercanas a un punto latlon')
  .get('/estaciones/cercanas?latlon=19.42705,-99.27571')
  .expectJSON([])
  .toss();
  
frisby.create('Obtener ruta mas corta entre dos estaciones')
  .get('/ruta?origen=19&destino=99')
  .expectJSON({})
