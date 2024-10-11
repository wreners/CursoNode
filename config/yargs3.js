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
                    demandOption: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el numero de tablas que se haran'
                })
                .option('limite', {
                    type: 'number',
                    demandOption: false, 
                    describe: 'Es la cantidad de multipicaciones que se haran en cada tabla'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    if( isNaN(argv.h)){
                        throw 'El hasta tiene que ser un numero'
                    }
                    if( isNaN(argv.limite)){
                        throw 'El limite tiene que ser un numero'
                    }
                    return true;
                })
                .argv

//dando permisos de exportacion a todo el programa por eso se iguala a argv el modele.exports
module.exports = argv;