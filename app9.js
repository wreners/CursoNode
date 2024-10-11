/**
 * Ejercicio - package.json - init - install - uninstall
 * Dando inicio al uso del paquete yars
 */

/**
 * Utilizando NPM para hacer el siguiente ejercicio visitar la página NPM
 * sitio web: npmjs.com, estos paquetes ayudan a no reinventar la rueda
 * pero hay que tener cuidado y buscar los más utilizados y seguros
 * por ejemplo ver el paquete colors npmjs.com/package/colors y examinar su uso
 * ¿Cómo lo instalo y cómo le digo a mi aplicación que lo voy a utilizar?
 * ¿Si comparto el código cómo sabe la otra persona qué paquete utilicé
 * y qué versión?
 * Cuando utilizamos paquetes de terceros debemos de preparar el proyecto.
 * 
 * 1- npm init
 * Para instalar los paquetes por defecto
 * Si se quiere contestar a todo sí se puede utilizar una bandera.
 * package name: dejar el nombre que le coloca o cambiarlo
 * version: 0.0.1
 * description: En una tabla de multiplicar con archivo de texto
 * entry point: app9.js
 * test command: se deja vacío, pero sirve para hacer pruebas unitarias y de integración
 * git repository: dejar vacío
 * keywords: vacío, pero sirve para que el usuario pueda buscar si aplicación por estas palabras
 * author: Antonio Escobar
 * license: MIT
 * Is this OK? Presionar enter
 * 
 * Se generó dentro del proyecto el archivo package.json
 */

/**
 * Archivo PACKAGE.JSON
 * Examinar este archivo en su carpeta
 * versión: no se puede regresar a versiones anteriores
 * Este archivo es el punto inicial de cualquier proyecto de NODE
 * y dice qué comandos podemos utilizar para operar la aplicación por ejemplo test
 * se agrega en script base3 = node app9.js --base=3
 * luego guardar y correr npm run base3
 * verificar que main: app9.js
 * npm run base3
 */

/**
 * Instalación de paquete de colors
 * npm i colors
 * En las dependencias del package.json se puede verificar la instalación de la
 * dependencia de colors en mi caso la versión 1.4.0
 * que versión tienen ustedes
 * También ahora existe el archivo package-lock.json aquí dice cómo se construyeron las
 * dependencias
 * También se creó la carpeta node_modules se tiene las dependencias en sí,
 * podría instalar dependencias que solo me sirven para desarrollo y no para
 * producción como por ejemplo nodemon
 * npm nodemon install --save-dev
 * para comprobar visitar el package.json y ahora aparece un devDependencies y allí aparece nodemon
 * Si se quiere desinstalar por ejemplo nodemon
 * npm uninstall nodemon
 * En mi caso como no tengo la versión actualizada de colors voy a desinstalarla
 * npm uninstall colors
 * instalaré ahora la versión específica
 * npm i colors@1.0.4
 * Si se quiere actualizar los paquetes se utiliza
 * npm update
 */

/**
 * Instalación del paquete Yargs https://www.npmjs.com/package/yargs
 * npm i yargs
 */

const { crearArchivo } = require('./helpers/multiplicar3');
const argv = require('yargs').argv; //requerimos YARGS

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs',argv.base);

/**
 * utilizar
 * 1- node app9
 * 2- node app9 --base=3
 * 
 * Que hace YARGS veamos primero que viene primero de process.argv, node app9 --base=3
 * [
 * 'C:\\Program Files\\nodejs\\node.exe',
 * 'C:\\Users\\Thiago\\Desktop\\CursoNodeJS\\04-bases-node\\app9',
 * '--base=3'
 * ]
 * 
 * Si analizamos todo lo recoge como un String pero YARGS es más eficiente
 * y ve los tipos de datos y variables como sigue
 * { _: [], base: 3, '$0': 'app9' }
 * Con esto ya no necesito cortarlo, no se necesita el split, etc
 * node app9 -b 5 -l
 * node app9 --base=5 --listar
 * 
 * También ayuda a documentar la aplicación como sigue se puede dar una idea
 * node app9 --help , esto sin yargs no funcionaría
 * Options:
 * --help     Show help                                             [boolean]
 * --version  Show version number                                   [boolean]
 * 
 * node app9 --version
 */

/**
 * uso de yargs, ver el resultado de escribir en consola
 * node app9 --base=5 --limite=10
 */