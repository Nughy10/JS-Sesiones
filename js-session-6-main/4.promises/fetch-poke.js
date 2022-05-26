fetch('https://pokeapi.co/api/v2/pokemon?limit=400&offset=0')
    .then(res => res.json())
    .then(result => {
        console.log('Petición correcta');
        console.log(result.results);

        result.results.forEach(poke => {
            const container = document.createElement('div');
            const pokeName = document.createElement('div');
            pokeName.innerText = poke.name;
            container.appendChild(pokeName);

            const link = document.createElement('a');
            link.innerText = `Link al pokemon ${poke.name}`;
            link.href = poke.url;
            link.target = '_blank';

            container.appendChild(link);

            document.body.appendChild(container);
        })
    })
    .catch(error => {
        console.log('Error');
        console.log(error);
    })