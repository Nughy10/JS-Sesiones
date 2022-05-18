//FUNCIONES

function nombre(param){
    console.log(param);
}

nombre("sergio")


function saluda(){
    console.log("hola")
}

saluda();


function suma(a,b){
    console.log(a + b)
}

suma(3,4)


function resta(a,b){
    return a - b;
}

let resultado = resta(6,2);
console.log(resultado)


const superheroes = ["hulk", "thor", "spiderman"];
const superheroes2 = ["hulk", "thor", "spiderman"];

function addHero(superheroes, hero){
    superheroes.push(hero);
}

addHero(superheroes, "Dr. Strange")
addHero(superheroes, "Vision")
console.log(superheroes)



function concatenarArrays(arra1, arra2){
    return arra1.concat(arra2)
}

const miNuevoArrray = concatenarArrays(superheroes, superheroes2)
console.log(miNuevoArrray)


function multi(numA = 1, numB = 3){
    console.log(numA * numB)
}

multi();
multi(2);
multi(2,5);


function puedoConducir(edad){
    if(edad >=18){
        console.log("puedes conducir")
    }else{
        console.log("no puedo Conducir")
    }
}

puedoConducir(21)
puedoConducir(15)



//SCOPE
function avenger(){
    var avengerName = "thor"
    console.log(avengerName)
}

avenger()
//console.log(avengerName)

var myAvenger = "thor"

function getAvenger(){
    var myAvenger = "hulk"
    console.log(myAvenger)
}

getAvenger()
console.log(myAvenger)




var newAvenger = "thor"
if(newAvenger){
    var newAvenger = "hulk"
    console.log("dentro var", newAvenger)
}

console.log("fuera var", newAvenger)


let newAvenger2 = "thor"
if(newAvenger2){
    let newAvenger2 = "hulk"
    console.log("dentro let", newAvenger2)
}

console.log("fuera let", newAvenger2)

