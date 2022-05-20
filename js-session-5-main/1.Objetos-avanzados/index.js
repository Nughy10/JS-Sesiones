const alumno = {
    nombre: 'Mar',
    apellido: 'Andres',
    puntos: 16,
    role: 'developer',
    'historial de puntos': [1,23,4,5]
};
console.log(alumno);

alumno.edad = 18;
delete alumno.role;

// dot notation -> notación de punto
// console.log(alumno.edad);

// bracket notation -> notación por corchetes
const propiedadQueQuieroAcceder = 'edad';

console.log(alumno['edad']);