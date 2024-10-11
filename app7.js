const { crearArchivo } = require('./helpers/multiplicar3')

console.clear();

console.log(process.argv); //Imprime los procesos que vienen de la consola

//Capturando el tercer argumento, se ingresa en consola node app7 --base=5
const [, , arg3='base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
console.log(base);

