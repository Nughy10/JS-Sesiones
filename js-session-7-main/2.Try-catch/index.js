/**
 * Try Catch. Lo podemos utilizar siempre
 * 
 * Nos permite saber si hay un fallo en nuestro código y ver el error.
 * 
 */

/**
 * try {}
 * catch(error) {}
 */

const alumnos = ['Carlos', 'Luis', 'Raquel'];

try {
    // Prueba este código
    alumnos.push('Alberto');
    // console.log(pepe);
    alumnos.push('Mireia');
    alumnos.pish('Mathias');
    alumnos.push('Fran');
} catch(error) {
    // Y si hay un error, ejecuta esto.
    console.log('Ha fallado al añadir un alumno al array. Inténtalo de nuevo');
    console.log(error);
    // console.log(error.name);
    // const [undefined, line, character] = error.stack.split('.js')[1].split(':');
    // console.log(`Error en la línea ${line}, carácter ${character.split(')')[0]}`)
}

try {
    console.log('Otro bloque Try')
    const name = 'Carlos';
    console.log(name);
} catch(error) {
    console.log('Error segundo bloque try/catch')
    console.log(error);
}

console.log('alumnos', alumnos);

// try {}
// catch(error) {}