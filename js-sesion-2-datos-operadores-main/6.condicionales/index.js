// IF  --> SI SE CUMPLE CONDICIÓN

// IF --> LA CONDICION SE CUMPLE CUANDO ES TRUE

// TRUE  --> CUALQUIER VALOR QUE NO SEA FALSE, 0, VACIO, NULL O UNDEFINED
// TRUE  --> TOMA COMO True el 1

// GLOSARIO COMPARACIONES
// MAYOR QUE -->   >
// MENOR QUE -->   <
// MAYOR O IGUAL QUE -->  >=
// MENOR O IGUAL QUE -->  <=
// IGUAL QUE -->    ==
// ESTRICTAMENTE IGUAL -->   ===
// NO ES IGUAL QUE -->  !=
// ESTRICTAMENTE NO ES IGUAL QUE -->  !==

if (true == "1") {
  console.log("paso el if");
}

let age = 16;

if (age >= 18) {
  console.log("puedes conducir");
}

// ELSE --> no se cumples
if (age >= 18) {
  console.log("puedes conducir");
} else {
  console.log("no puedes conducir");
}

// ELSE IF --> O SI
let comidaFavorita = "bocadillo";
if (comidaFavorita == "bocadillo") {
  console.log("mi comidaFavorita es un bocadillo");
} else if (comidaFavorita == "garbanzos") {
  console.log("mi comidaFavorita son los garbanzos");
} else if (comidaFavorita == "macarrones") {
  console.log("mi comidaFavorita son los macarrones");
} else {
  console.log("mi comidaFavorita no estaba, es la", comidaFavorita);
}

// ESTRICTOS === o !==
// COMPARAR VALOR Y TIPO
if ("5" === 5) {
  console.log("entro");
}

console.log(typeof "5"); //--> string
console.log(typeof 5); //--> number

if ("5" == 5 && "string" == "number") {
}

if ("5" !== 5) {
  console.log("no es igual");
}

//OPERADOR lOGIco

let numero = 15;
if (numero > 1 && numero < 10) {
  console.log("Soy mayor que 1 y menor que 10");
} else if (numero < 0) {
  console.log("soy un numero negativo");
} else if ((numero > 0) && (numero % 2 == 1)) {
  console.log("soy impar");
}

//IF TERNARIO
// COMPARACION ? POSITIVA : NEGATIVA
age = 21;
const mayorEdad = age >= 18 ? "Soy mayor de edad" : "Soy menor de edad";
// if (age >= 18) {
//   console.log("soy mayor de Edad");
// } else {
//   console.log("soy menor de edad");
// }
console.log(mayorEdad);

//TERNARIO DOBLE
age = 15;
const edadDiscoteca =
  age >= 18
    ? "Puedes pasar"
    : age >= 14
    ? "solo puedes pasar sesion baby"
    : "no puedes pasar";
console.log(edadDiscoteca);

if (age >= 18) {
  console.log("puedes pasar");
} else if (age >= 14) {
  console.log("sesion baby");
} else {
  console.log("nop puedes pasar");
}



//NEGACION

const culpable = true;

if (!culpable) {
  console.log("sale de la carcel");
} else {
  console.log("sigues en la carcel");
}

let nombre = "pepe";

if(nombre !== "paco"){
    console.log("no me llamo paco")
}else{
    console.log("si que soy yo")
}
