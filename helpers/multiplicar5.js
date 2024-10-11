const fs = require('fs');
const colors = require('colors'); // Estoy utilizando colors

const crearArchivo = async (base = 5, listar = false, hasta = 5, limite = 10) => {
    
    try {
        
        let salida = '';
        let consola = '';
        
        salida += '========================\n';
        salida += `  TABLAS DEL ${base} AL ${hasta}\n`;
        salida += '========================\n';

        //Genera las tablas de la base hasta lo que diga la variable hasta
        for(let t = base; t <= hasta; t++){
        // Genera la tabla de lo que se envíe en la base del 1 al limite
            salida += `\nTabla del: ${t}\n`
            consola += `${`\nTabla del: ${t}\n`.red}`
            for (let i = 1; i <= limite; i++) {
                salida += `${t} x ${i} = ${t * i}\n`;
                consola += `${t} ${'x'.green} ${i} ${'='.green} ${t * i}\n`;
            }
        }
    //si viene el parametro listar es decir existe entonces imprime esto en consola
    //lo que se encuentra acumulado en la variable salida
    if (listar){

        console.log('========================'.green);
        console.log(`${' TABLAS DEL '.green} ${`${base}`.blue} ${' AL '.green} ${`${hasta}`.blue}`);
        console.log('========================'.green);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tablas-del-${base}-al-${hasta}.pdf`, salida);

    return `tabla-del-${base}-al-${hasta}.pdf`;

    } catch (err) {

        throw err

    }

}

module.exports = {
    crearArchivo
}