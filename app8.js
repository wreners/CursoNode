const { crearArchivo } = require('./helpers/multiplicar3')

console.clear();

const [, , arg3='base=5'] = process.argv;
const [ , base=5] = arg3.split('=')
//Esta destructuracion esta capturando por posicion eso es un inconveniente

//esto tiene muchos inconvenientes ya que acepta cualquier tipo de parametros
//por ejemplo node app8 --limite=40 --base=10 , hace la tabla del 40 por ejemplo

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//para correr el app8 es necesario ingresar lo siguiente node app8 --base=12 en consola
//por ejemplo si utilizamos en linea de comandos node --help tengo un manual completo de ayuda
//esto lo podemos aplicar para hacer un manual para el uso de nuestra propia aplicacion