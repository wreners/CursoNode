//PROYECTO PARCIAL - YARGS MODIFICADO

const { crearArchivo } = require('./helpers/multiplicar5')
const colors = require('colors')
const argv = require('./config/yargs3')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h, argv.limite)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
