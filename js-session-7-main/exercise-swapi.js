const init = () => {
    fetch('https://www.swapi.tech/api/planets?page=1&limit=100')
        .then(res => res.json())
        .then(res => console.log('respuesta ->', res))
        .catch(error => console.log('error ->', error));
};

init();


/**
 * Renderizar todos los planetas de Star Wars en un listado en el HTML.
 *
 * Condiciones: Usar todos los campos (uid, nombre, url)
 * 
 * 10 puntos extras: Debajo de cada planeta, poner su población.
 * (HINT: habría que hacer una petición por planeta y descargar todos sus datos
 * de ahí sacar la población)
 * 
 * Campo del planeta: population
 */