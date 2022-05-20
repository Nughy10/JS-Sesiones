/**
 * Somos una inmobiliaria y constructora.
 * 
 * Vamos a crear una función que sea capaz de crear la casa de nuestros sueños.
 * 
 * Tenemos muchos clientes, que todos quieren casas con 3 habitaciones y diferentes números
 * de baños.
 * 
 * Bien, lo que haremos será crear un generador de casas con cierto número de habitaciones
 * y poder personalizar la cantidad de baños que tendrá cada casa.
 */


const myDreamHouse = (rooms) => {
    console.log(`Mi casa ideal tiene ${rooms} habitaciones`);

    function createBathrooms(baths) {
        const casa = {
            habitaciones: rooms,
            bathrooms: baths,
        }

        return casa;
    };

    // return 'pepe';
    return createBathrooms;
}

const casaCon2Habitaciones = myDreamHouse(2);
const casaCon4Habitaciones = myDreamHouse(4);

console.log(casaCon2Habitaciones(3));
console.log(casaCon2Habitaciones(1));
console.log(casaCon2Habitaciones(4));

console.log(casaCon4Habitaciones(2));
console.log(casaCon4Habitaciones(10));