const alumnos = ['Luis', 'Paula', 'Pau', 'Carlos'];

const addItem = (list, item) => {
    return new Promise((resolve, reject) => {
        const randomTime = Math.floor(Math.random() * 2000) + 1000;

        if(!list || !item) {
            return reject('Argumentos incorrectos');
        }

        setTimeout(() => {
            list.push(item); // Nos imaginamos, que en lugar de hacer un push estamos grabando en un servidor.
            return resolve(list);
        }, randomTime);
    });
};

addItem(alumnos, 'Paula')
    .then((result) => {
        console.log('Se ha añadido correctamente el item', result);
    })
    .catch((error) => {
        console.log('Ha ocurrido un error', error);
    });