/**
 * Ejercicio - Agregar opcion -l o --listar
 * Utilizara el multiplicar4.js que tendra la opcion
 * para aceptar de parametro la bandera -l --listar
 * listar sirve para imprimir en consola, si no se elige entonces
 * solo creara el archivo
 */

const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('1', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

console.clear();

console.log(argv);

//Se envian dos argumentos al valor de base que es numerico y listar que es booleano
crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err));

/**
 * La aplicacion en este punto hace lo siguiente
 * crear la tabla del 66 y listarla node app12 --base=66 --listar
 * node app12 -b 66 -1
 * 
 * crear la tabla 66 sin imprimir en consola
 * node app12 -b 66
 * node app12 --base=66
 */