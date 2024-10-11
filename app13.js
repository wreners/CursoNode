/**
 * Ejercicio - Configuracion de Yargs Independiente
 * utilizara el multiplicar4.js que tendra la opcion
 * para aceptar de parametro la bandera -l --listar
 */

const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('./config/yargs') //Se requiere el archivo yargs.js que esta en config
//pero se iguala a un objeto llamado argv para que no cambie ninguna logica

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))

/**
 * La aplicacion en este punto hace lo siguiente
 * crear la tabla del 66 y listarla node app12 --base=66 --listar
 * node app12 -b 66 -l
 * 
 * crear la tabla 66 sin imprimir en consola
 * node app13 -b 66
 * node app13 --base=66
 */
