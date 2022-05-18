const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const myToys = [];
for (const toy of toys) {
  if (!toy.name.toLowerCase().includes("gato")) {
    myToys.push(toy);
  }
}

console.log(myToys);

let index = 0;
for (const toy of toys) {
  console.log(toy);
  // if (toy.name.toLowerCase().includes("gato")) {
  //   toys.splice(index, 1);
  // } else {
  //   index++;
  // }
}

console.log(toys);


for (let index = 0; index < toys.length; index++) {
  const toy = toys[index];

  if(toy.name.toLowerCase().includes("gato")){
    toys.splice(index, 1);
    index--;
  }
  
}

console.log(toys);