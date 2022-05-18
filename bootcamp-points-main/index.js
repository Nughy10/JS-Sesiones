/**
 * Cada alumno será un objeto con las siguientes propiedades.
 * name: string
 * Puntos: number
 * Historial De Puntos: array de objetos. [ {date: formato unix, points} ];
 */

/**
 * Para que no se me olvide:
 * Un punto para todos, excepto Raquel, Mathias y Javi
 * 
 * Dos punto para Fernando
 * 
 * Un punto para Gloria
 * 
 * Un punto para Mireia
 * 
 * Dos punto para Luis
 * 
 * Un putno para Alendro!
 * 
 * Un punto para Fran!!
 */

const alumns = [
    {
        name: 'Alberto',
        lastName: 'Núñez',
        points: 0,
        history: [],
    },
    {
        name: 'Alejandro',
        lastName: 'Rodríguez',
        points: 0,
        history: [],
    },
    {
        name: 'Carlos',
        lastName: 'De La Cruz',
        points: 0,
        history: [],
    },
    {
        name: 'Fernando',
        lastName: 'Valero',
        points: 0,
        history: [],
    },
    {
        name: 'Fran',
        lastName: 'Riquelme',
        points: 0,
        history: [],
    },
    {
        name: 'Gloria',
        lastName: 'Vega',
        points: 0,
        history: [],
    },
    {
        name: 'Luis',
        lastName: 'Camino',
        points: 0,
        history: [],
    },
    {
        name: 'Mar',
        lastName: 'Andrés',
        points: 0,
        history: [],
    },
    {
        name: 'Mathias',
        lastName: 'Barros',
        points: 0,
        history: [],
    },
    {
        name: 'Mireia',
        lastName: 'García',
        points: 0,
        history: [],
    },
    {
        name: 'Javier',
        lastName: 'Amián',
        points: 0,
        history: [],
    },
    {
        name: 'Pau',
        lastName: 'Isach',
        points: 0,
        history: [],
    },
    {
        name: 'Raquel',
        lastName: 'Deligeorges',
        points: 0,
        history: [],
    },
    {
        name: 'Paula',
        lastName: 'Hernández',
        points: 0,
        history: [],
    },
    {
        name: 'Victor',
        lastName: 'León',
        points: 0,
        history: [],
    },
];

/**
 * PRÓXIMOS PASOS
 * - Crear contenido del Ranking en JS
 * - Refactorizar funciones createHeader y createMain
 */

function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    return container;
};

function createHeader(container) {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.innerText = 'Bootcamp Score Project';
    header.appendChild(h1);

    const divLogo = document.createElement('div');
    divLogo.classList.add('logo');
    header.appendChild(divLogo);

    const img = document.createElement('img');
    img.src = './images/upgrade-logo.png';
    img.alt = 'upgrade logo';
    divLogo.appendChild(img);

    const companyName = document.createElement('div');
    companyName.innerText = 'Upgrade Hub';
    divLogo.appendChild(companyName);


    container.appendChild(header);
}

function createMain(container) {
    const main = document.createElement('main');
    container.appendChild(main);
}

function createFooter(container) {
    const footer = document.createElement('footer');
    container.appendChild(footer);
}

function init() {
    const container = createContainer();
    createHeader(container);
    createMain(container);
    createFooter(container);
}


window.onload = init;