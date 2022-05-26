const extractInfo = (planets) => {
    console.log(planets);
}

const getPlanets = () => {
    return fetch('https://www.swapi.tech/api/planets?page=1&limit=10')
        .then(res => res.json())
        .then(res => {
            // extractInfo(res.results)
            return res.results;
        })
        .catch(error => console.log('error ->', error));
}

const renderPlanets = (planets) => {
    planets.forEach(planet => {
        const planetContainer = document.createElement('div');
        
        const html = `
            <div>ID: ${planet.uid}</div>
            <div>Nombre: ${planet.name}</div>
            <a href=${planet.url} target="_blank">Link a ${planet.name}</a>
        `;

        planetContainer.innerHTML = html;
        document.body.appendChild(planetContainer);
    });
}

const init = async () => {
    const planets = await getPlanets();
    renderPlanets(planets);
};

init();