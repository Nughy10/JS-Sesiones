const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let index = 0; index < movies.length; index++) {
  const movie = movies[index];

  movie.durationInMinutes < 100
    ? smallMovies.push(movie)
    : movie.durationInMinutes > 200
    ? largeMovies.push(movie)
    : mediumMovies.push(movie);
}


console.log("Small movies", smallMovies);
console.log("medium movies", mediumMovies);
console.log("large movies",largeMovies);