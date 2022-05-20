const alumno = {
    nombre: 'Mar',
    apellido: 'Andres',
    puntos: 16,
    rol: 'developer',
};

// Destructuring (las lineas comentadas son equivalentes a la linea con destructuring)
// const nombre = alumno.nombre;
// const apellido = alumno.apellido;
const {nombre, apellido} = alumno;
// console.log(nombre);
// console.log(apellido);

const alumno2 = {
    name: 'Mar',
    lastName: 'Andres',
    points: 16,
    role: 'developer',
    developer: true,
};

// Desctructuring guardando el resto de propiedades.
// const {name, lastName, developer, points, ...restoPropiedades} = alumno2;
const {name, lastName, ...restoPropiedades} = alumno2;
// console.log(name);
// console.log(lastName);
// console.log(restoPropiedades);

// Destructuring en parámetro de una función.

const printAlumno = ({name, lastName, points}) => {
    console.log(name);
    console.log(lastName);
    console.log(points);
};

const printAlumno2 = (alumn) => {
    const {name, lastName, points} = alumn; // síntaxis destructuring
    console.log(name);
    console.log(lastName);
    console.log(points);
};

// printAlumno2(alumno2);


// Destructuring de propiedades
const coche = {
    puertas: 4,
    asientos: {
        piel: 'Asientos de piel',
        sinteticos: 'Asientos sintéticos',
    },
    motor: true,
};

const {puertas, asientos: {piel, sinteticos} } = coche;

console.log(puertas);
console.log(piel);
console.log(sinteticos);

const arrayDeCoches = [
    {
        puertas: 4,
        asientos: {
            piel: 'Asientos de piel',
            sinteticos: 'Asientos sintéticos',
        },
        motor: true,
    },
    {
        puertas: 4,
        asientos: {
            piel: 'Asientos de piel',
            sinteticos: 'Asientos sintéticos',
        },
        motor: true,
    }
];


// Destructuring dentro de un bucle
arrayDeCoches.forEach((coche) => {
    const {puertas, asientos, motor} = coche;
    console.log('forEach puertas->', puertas);
    console.log('forEach asientos->', asientos);
    console.log('forEach motor->', motor);
})