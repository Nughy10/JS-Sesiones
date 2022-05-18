const goodProducts = [];
const badProducts = [];
const movies = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];


for (const movie of movies) {
    // if(movie.sellCount > 20){
    //     goodProducts.push(movie);
    // }else{
    //     badProducts.push(movie);
    // }

    movie.sellCount > 20 ? goodProducts.push(movie) : badProducts.push(movie)
}


console.log("goodProducts", goodProducts);
console.log("badProducts", badProducts);