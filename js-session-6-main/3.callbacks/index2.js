const alumnos = ['Luis', 'Paula', 'Pau', 'Carlos'];

/**
 * Una función, que reciba un array y un elemento.
 * 
 * Esa función, añadirá el elemento al array.
 */


const addItem = (list, item, avisame) => {
    const randomTime = Math.floor(Math.random() * 2000) + 1000;
    // Simulamos que no sabemos cuando se ejecutará este push.
    setTimeout(() => {
        list.push(item); // Nos imaginamos, que en lugar de hacer un push estamos grabando en un servidor.
        avisame(list);
    }, randomTime);
}

const aviso = (nuevoArray) => {
    console.log('Acabamos de añadir el item a la lista', nuevoArray);
};

addItem(alumnos, 'Gloria', aviso);
addItem(alumnos, 'Mathias', aviso);
addItem(alumnos, 'Mar', aviso);
addItem(alumnos, 'Alejandro', aviso);
addItem(alumnos, 'Carlos', aviso);
addItem(alumnos, 'Fernando', aviso);
addItem(alumnos, 'Fran', aviso);
addItem(alumnos, 'Luis', aviso);
addItem(alumnos, 'Mireia', aviso);
addItem(alumnos, 'Pau', aviso);
addItem(alumnos, 'Paula', aviso);
addItem(alumnos, 'Victor', aviso);
addItem(alumnos, 'Alberto', aviso);