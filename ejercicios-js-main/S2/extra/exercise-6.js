const arrayNombres = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];


function swap(array, a, b){
    if(array[a] && array[b]){
        let aux = array[b];
        array[b] = array[a];
        array[a] = aux;

        return array;

    }
    return array;
}



console.log(swap(arrayNombres, 1, 2))
console.log(swap(arrayNombres, 1, 8))