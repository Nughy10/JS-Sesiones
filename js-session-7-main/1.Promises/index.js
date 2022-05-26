/**
 * Promesa para responder una duda a Fernando, si levanta la mano.
 */

const ejemplo = () => {
    const randomTime = Math.floor(Math.random() * 2000) + 1000;

    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            resolver('Hola, este es el return de mi función')
        }, randomTime)
    });
};

const ejemploResult = ejemplo().then(response => {
    // console.log('response de la promesa', response);
    return response;
})

/**
 * Vamos a pedir una cerveza en un garito el viernes por la noche.
 */

const pedirCerveza = (hora) => {
    console.log('Nos acercamos a la barra a pedir una cerveza');
    
    return new Promise((resolve, reject) => {
        
        if (hora === 23) {
            return resolve('Te llevas tu cerveza a mitad de precio');
        }

        if(hora === 23) {
            return reject('El bar ya está cerrado, márchate o llamo a policía');
        }

        return resolve('Pagas tu cerveza a precio normal');

    });
};

/**
 * Consumir promesas
 * Nos quedamos con lo siguiente:
 * Cuando una función retorna una promesa (perdirCerveza lo hace)
 * le ponemos un .then() y un .catch()
 * Si todo va bien -> se ejecuta el .then()
 * Si algo va mal -> se ejectua el .catch();
 */

pedirCerveza(20)
    .then((res) => {
        console.log('then ->', res); // then -> Pagas tu cerveza a precio normal
        return 'Hola, soy Fernando';
    })
    .then((fernando) => {
        console.log('Fernando', fernando); // Fernando Hola, soy Fernando
        return 'Hola, soy Fran!!!';
    })
    .catch((error) => {
        console.log('Ha habido un error después de Fernando', error);
    })
    .then((fran) => {
        console.log(pepe)
        console.log('Fran', fran);
    })
    .catch((error) => {
        console.log('Ha habido un error después de Fran ->', error);
    });