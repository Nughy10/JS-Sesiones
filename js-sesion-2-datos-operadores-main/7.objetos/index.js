// const objeto = {
//     key:value,
//     key:value,
//     key:value,
//     key:value,
//     key:vale
// };

// OBJETO

const arrayNombres = ["maria", "juan", "daniel"]; 

const persona = {
    nombre: "Fernando", 
    edad: 30,
    ciudad: "Alicante", 
    email: "fernando@gmail.com", 
    esPadre: true,
    hijos: [{
        nombre: "maria", 
        edad: 3
    },{
        nombre: "francisco", 
        edad: 5
    }]
}


console.log(persona.nombre); //obtenemos el nombre del objeto persona
console.log(persona['edad']); //obtenemos la edad del objeto persona


persona.edad = 25;
console.log(persona.edad); 

persona.telefono = "600600600";
console.log(persona.telefono);

console.log(persona.hijos[1].nombre)