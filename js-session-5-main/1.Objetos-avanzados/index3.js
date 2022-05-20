const createAlumn = (nombre, apellido, points, age) => {
    // Cuando el nombre de una propiedad coincide con el nombre de 
    // una variable que se le asigna a la propiedad. Podemos omitir el {nombre: nombre}
    const newAlumn = {
        nombre,
        apellido,
        puntos: points,
        edad: age,
        role: undefined,
    }
    return newAlumn;
}

const pau = createAlumn('Pau', 'Isach', 12, 18);
const mireia = createAlumn('Mireia', 'Garcia', 13, 18);

if ("role" in pau) {
    console.log('Pau si tiene una propiedad role');
} else {
    console.log('Pau no tiene una propiedad role');
}

for (const propiedad in mireia) {
    console.log('propiedad ->', propiedad);
    console.log(mireia[propiedad]);
}


// TIP: Saber si un objeto tiene un valor concreto.
// console.log(Object.entries(mireia));
// console.log(Object.keys(mireia));
// console.log(Object.values(mireia).includes('Garcia'));