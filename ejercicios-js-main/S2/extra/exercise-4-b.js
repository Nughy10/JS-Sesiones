const miArray = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

function removeItem(array, text) {
  let position = findArrayIndex(array, text);
  if (position !== -1) {
    array.splice(position, 1);
  }
  return array;
}

console.log(removeItem(miArray, "Mosquito")); 
console.log(removeItem(miArray, "Perro"));
