const alumnos = ['Juan', 'Pepe', 'Lola'];

// destructuring de array
const [nombre1, cosa2, elTercero] = alumnos;

console.log(nombre1);
console.log(cosa2);
console.log(elTercero);

// 

const useState = () => {
    return ['Victor', 'León'];
};

const [nombre, apellido] = useState();

console.log(nombre);
console.log(apellido);