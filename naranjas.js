//2Parcial 2024
const calcularCompra = (naranja1 = 0, naranja2 = 0, naranja3 = 0, efectivo = 0) => {

    const naranjas = {
        precio_naranja1: 4.75,
        precio_naranja2: 3.75,
        precio_naranja3: 2.50
    }

    const total = naranjas.precio_naranja1 * naranja1 + naranjas.precio_naranja2 + naranja2 + naranjas.precio_naranja3 * naranja3
    const cambio = efectivo - total


    return `
    |--------------------Recibo de Compra---------------------------------------|
    |Producto\t    Precio Unitario\t    Cantidad\t    Subtotal\t\t|
    |1-Naran 1\t\t   ${naranjas.precio_naranja1}\t\t          ${naranja1}\t\t     ${naranjas.precio_naranja1 * naranja1}\t\t|
    |2-Naran 2\t\t   ${naranjas.precio_naranja2}\t\t          ${naranja2}\t\t     ${naranjas.precio_naranja2 * naranja2}\t\t|
    |3-Naran 3\t\t   ${naranjas.precio_naranja3}\t\t          ${naranja3}\t\t     ${naranjas.precio_naranja1 * naranja3}\t\t|
    |                                                            \t\t|   
    |Total    ${total}                                           \t\t\t|
    |Efecivo  ${efectivo}                                        \t\t\t|
    |Cambio   ${cambio}                                          \t\t\t|
    |---------------------------------------------------------------------------|`
}
const compraNaranjas1 = calcularCompra(4, 4, 4, 200);
const compraNaranjas2 = calcularCompra(4, 5, 8, 200);
const compraNaranjas3 = calcularCompra(4, 6, 8, 200);
const compraNaranjas4 = calcularCompra(4, 7, 8, 200);

console.log('segundo parcial', compraNaranjas1);
console.log('segundo parcial', compraNaranjas2);
console.log('segundo parcial', compraNaranjas3);
console.log('segundo parcial', compraNaranjas4);