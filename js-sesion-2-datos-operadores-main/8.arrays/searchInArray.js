//LOCALIZAR VALORES EN UN ARRAYS
const tripulacion = ['Luffy', 'Nami', 'Zoro', 'Ussop', 'Sanji', 'Robin', 'Chopper', 'Brook', 'Ussop', 'Franky', 'Jimbe' ];

//INDEXOF --> Devolver la primera posicion del elemento que buscamos en el array.
//Si no se encuentra nos devuelve -1

const indexOfSanji = tripulacion.indexOf( 'Sanji' );
console.log("index Sanji --", indexOfSanji);
console.log(tripulacion[indexOfSanji]);


//LASTINDEXOF --> Devuelve la posicion del último elemento que buscamos en el array
const lastIndexOfUssop = tripulacion.lastIndexOf( 'Ussop' );
console.log("last Index Ussop --", lastIndexOfUssop);
console.log(tripulacion[lastIndexOfUssop])



//INCLUDES -->  Devuelve un booleano true o false dependiendo de si el elemento esta o no en el array
console.log(tripulacion.includes("Robin"));
console.log(tripulacion.includes("Arlong"))