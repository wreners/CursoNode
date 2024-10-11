/**
 * Se agrega un describe para que en la ayuda del uso de la app con help
 * describe de mejor forma la aplicacion
 */

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    //default: false, se quita ya que esta por default en la app principal
                    describe: 'muestra la tabla en consola'
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