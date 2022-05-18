//FOR(VARIABLE INICIAL; CONDICION; OPERACION)
// let i = 0;
// i++; // --> i = i + 1 
// i--; // --> i = i - 1

let i = 3;

for(i; i < 10; i++){
    console.log("vuelta " + i)
    // if(i%2 == 0){
    //     i += 2; // --> i = i + 2
    // }
}

const frutas = ["platano", "manzana", "naranja", "fresa", "aguacate"];

for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if(fruta !== "naranja"){
        console.log("Soy un",i , fruta)
    }
}


const superheroes = [
    {
        name: "Spiderman",
        power: 50,
        avenger: false
    },
    {
        name: "Hulk",
        power: 150,
        avenger: true
    },
    {
        name: "IronMan",
        power: 90,
        avenger: true
    }
]

let totalPower = 0;


for (let index = 0; index < superheroes.length; index++) {
    const superheroe = superheroes[index];
    if(superheroe.avenger){
        totalPower += superheroe.power
    }
}


console.log("El poder total de los superheroes es", totalPower)

// function hola(msg){
//     console.log(msg)
// }

// const hola = (msg) =>{
//     console.log(msg)
// }
// hola("hola")


//FOR EACH
// array.recorre((coge uno a uno todos los elementos del array) --> {hace una acción con ese elemento})
// superheroes.forEach(function(superheroe){

// })
superheroes.forEach((pepe) => {
    console.log("ForEach", pepe);
})
// superheroes.forEach((pepe, index) => {     //PODEMOS TENER EL INDEX DEL ARRAY EN UN FOREACH
//     console.log("ForEach", index, pepe);
// })



//FOR OF
for (const superheroe of superheroes) {
    console.log("For of", superheroe)
}


const superman = {
    name: "Clark Kent",
    planeta: "Kripton",
    debilidad: "kriptonita"
}
//FOR IN -->  PARA OBJETOS
for (const key in superman) {
    console.log("Superman tiene", key, "con este valor", superman[key])
    
}

for(const superheroe of superheroes){
    for (const key in superheroe) {
        console.log(superheroe[key])
    }
}