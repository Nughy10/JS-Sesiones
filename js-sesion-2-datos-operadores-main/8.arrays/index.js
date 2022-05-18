//ARRAYS

const comida = ["patata", "tomate", "leche", "queso"];
const numbers = [1, 3, 6, 8];
const random = ["juan", true, 4];

const personajes = [
  {
    nombre: "Goku",
    planeta: "Vegeta",
    mujer: "Chichi"
  },
  {
    nombre: "Picolo",
    planeta: "Namek",
  },
];

console.log(personajes[1].mujer ? personajes[1].mujer : "no tiene")


//Acceder a los elementos del array 
console.log(comida[2]) // --> leche
console.log(personajes[0])
console.log(personajes[1]['nombre'])
console.log(personajes[1].planeta)


// Longitud LENGTH  -- >  L E N GO TO HELL
console.log(comida.length)

let nombre = "miguel";
console.log(nombre.length);
console.log(nombre[3]);