const personajes = ["Luffy", "Nami", "Zoro", "Ussop"];
console.log("Array original", personajes);

//POP() --> Elimina el último elemento del array  //Devuelve el elemento lo elemento borrado
personajes.pop();
console.log("Array pop", personajes);


//PUSH() --> Añade un/unos elementos al array
personajes.push("Ussop", "Sanji");
console.log("Array push", personajes);


//REVERSE() --> Invierte el array
personajes.reverse();
console.log("Array reverse", personajes);


// SHIFT() --> Eliminar el primer elemento del array //Devuelve el elemento lo elemento borrado
const personaje = personajes.shift();
console.log("Array shift", personaje);
console.log("Array shift", personajes);

// SORT() --> Ordenar el array por orden alfabetico
personajes.sort();
console.log("Array sort", personajes);

const numeros = [333, 45, 6, 23, 675, 1];
console.log(numeros.sort())
numeros.sort(function (a,b){
    return a - b;
})
console.log(numeros)



//SPLICE() --> Elimina elementos.
// RECIBE VARIOS PARAMETROS:
// 1º indice donde empieza a modificar el array
// 2º número de elementos a eliminar --> si fuera 0 no elimina ninguno y si añades elementos los pondría en esta posición
// 3º Añadir nuevos elementos
let eliminados  = personajes.splice(1,1);
console.log("Array eliminados", eliminados);
console.log("Array splice", personajes);

personajes.splice(1,0,"Nami", "Chopper", "Robin");
console.log("Array splice 2", personajes)

personajes.splice(0);  // Con array splice 0 puedes borrar tu array.
console.log("Array splice 3", personajes)



// UNSHIFT() --> Añadir elementos al principio del array
personajes.unshift("Luffy");
console.log("Array unshift", personajes)

personajes.unshift("Brook", "Franky", "Jimbe");
console.log("Array unshift 2", personajes)