// Y -- AND --> &&
const tengoCoche = true;
const tengoCarnet = true;

const puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);


// O -- OR --> ||
const tengoEfectivo = false;
const tengoTarjeta = false;

const puedoPagar = tengoEfectivo || tengoTarjeta;
console.log(puedoPagar);

// NO -- NOT --> !
const valor = !tengoEfectivo;
console.log(valor);