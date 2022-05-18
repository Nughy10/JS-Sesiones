const miArray = [
    "Caracol", 
    "Mosquito", 
    "Salamandra", 
    "Ajolote"
];
const miArray2 = [
    "Perro", 
    "Gato", 
    "Raton", 
    "Loro"
];

function findArrayIndex(array, text) {
  return array.indexOf(text) !== -1
    ? text + " esta en la posicion " + array.indexOf(text)
    : text + " no está en el array";
}

console.log(findArrayIndex(miArray, "Salamandra"));
console.log(findArrayIndex(miArray, "Perro"));


console.log(findArrayIndex(miArray2, "Salamandra"));
console.log(findArrayIndex(miArray2, "Perro"));
