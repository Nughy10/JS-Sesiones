const personnel = [
  { id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true },
  { id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false },
  { id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false },
  { id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, isForceUser: true },
  { id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85, isForceUser: true },
];

const result = personnel
    .map(person => {
        if(person.isForceUser) {
            person.jedi = true;
        } else {
            person.jedi = false;
        }

        return person;
    })
    .map(person => ({ ...person, totalScore: person.pilotingScore + person.shootingScore }))
    .filter(person => person.totalScore > 120)
    // .reduce((vaso, person, index, array) => {
    //     vaso = vaso + person.totalScore;

    //     return vaso;
    // }, 0);
    .reduce((acumulador, current, index, array) => {
        console.log(`Iteración ${index}. Acumulador empieza valiendo: ${JSON.stringify(acumulador)}`);
        acumulador[current.name] = current.id;
        console.log(`Iteración ${index}. Acumulador termina valiendo: ${JSON.stringify(acumulador)}`);

        return acumulador;
    }, {});

    /**
     * {
     *      'Caleb Dume': 11,
     *      'Sabine Wren': 82,
     * }
     */

    /**
     * Primera iteración.
     * Vaso vacío, se le suma 154 y se retorna.
     * 
     * Segunda iteración
     * Vaso vale 154 y se le suma 172 y se retorna
     * 
     * Tercera iteración
     * Vaso vale 326 y se le suma 156 y se retorna.
     * Como es el último elemento, lo que retorna Vaso acaba
     * guardado en la variable result;
     * 
     * La variable result vale 482;
     */

console.log(result);

const sum = (a, b) => a + b;


/**
 * 1. Si es usuario de la fuerza, le añadiremos una propiedad: jedi: true,
 * 1.1 Iterar sobre el array
 * 1.2 Saber quien es usuario de la fuerza y quien no.
 * 1.3 Modificar los que den true en usuario de la fuerza.
 * 
 * 2. Crearemos una nueva propiedad que sea igual al shootingScore + pilotingScore,
 * 
 * 3. Descartaremos todos los pilotos que tengan menos de 120 de puntuación total.
 */




