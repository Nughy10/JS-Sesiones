const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];


const arrayMenores = [];
const arrayMayores = [];

for(const user of users){
  if(user.years < 18){
    arrayMenores.push(user)
    // console.log(user.name, "menor de edad");
  }else{
    arrayMayores.push(user)
    // console.log(user.name, "mayor de edad")
  }
}

console.log("Usuarios menores de edad")
for(const menor of arrayMenores){
  console.log(menor.name)
}
console.log("Usuarios mayores de edad")
for(const mayor of arrayMayores){
  console.log(mayor.name)
}