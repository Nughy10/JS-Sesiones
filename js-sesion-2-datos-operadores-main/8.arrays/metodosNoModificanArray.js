//METODOS QUE NO MODIFICAN ARRAYS
const personajes = ["Luffy", "Nami", "Zoro", "Ussop"];
const personajes2 = ["Sanji", "Robin", "Chopper", "Brook", "Franky", "Jimbe"];


//CONCAT --> Concatena dos arrays y devuelve uno nuevo.
const tripulacion  = personajes.concat(personajes2);
console.log(personajes);
console.log("concat -- ", tripulacion);



//JOIN --> Devuelve un string con los elementos del array, y acepta un separador.
const joinTrip = tripulacion.join(" --- ");
console.log("join -- ",joinTrip);


//SLICE -> Devuelve un array con elementos: 
//1º indice donde empieza a obtener el array
//2º indice donde termina de obtener el array
const sliceTrip = tripulacion.slice(3, 7);
console.log("slice -- ", sliceTrip)


//toString() --> Convertir un array en string.
const stringTrip = tripulacion.toString()
console.log("toString -- ", stringTrip)