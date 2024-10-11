/**
 * Parte logica de yargs, solo se corto y pego aca por el momento
 * no tiene ningun cambio la logica de yargs.js
 */
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

//dando permisos de exportacion a todo el programa por eso se iguala a argv el modele.exports
module.exports = argv;