let fruit = prompt('Elige una fruta');
let quantity = prompt('Elige una cantidad');

console.log('Fruta elegida', fruit);
console.log('Cantidad de fruta', quantity);

const fruteroDeMiCasa = {
    manzanas: 5,
    melocotones: 3,
    [fruit]: quantity,
    // [fruit]: !isNaN(quantity) ? Number(quantity) : quantity,
};

console.log(fruteroDeMiCasa);