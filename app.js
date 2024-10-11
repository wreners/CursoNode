console.log('*********AUTOMATIZACION BASE**********')
for (let i = 1; i <= 10; i++) {
    const numero = 5;
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//Automatizacion con funcion flecha
console.log('*********FUNCION FLECHA**********')
let base = 5;

const tabla = (base = 5) => {
    let resultado = ''
    console.log(`---- Tabla del ${base} ----`);
    for(let i = 1; i <=10; i++){
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    }

    return resultado
}

// console.log(tabla(base));
// console.log(tabla(10));
// console.log(tabla(20));
console.log(tabla());