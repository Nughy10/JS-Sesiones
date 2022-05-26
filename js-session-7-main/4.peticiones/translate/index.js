const getJokeFromApi = () => {
    return fetch('https://api.chucknorris.io/jokes/random') // GET
        .then(response => {
            return response.json();
        })
        .then(joke => {
            return joke;
        })
        .catch((error) => {
            console.log('Error en petición broma Random', error)
        });
}

const getTranslate = (textToTranslate) => {
    const content = {
        source: 'en',
        target: 'es',
        q: textToTranslate,
    }
    // Os tenéis que registrar en la API https://rapidapi.com/gatzuma/api/deep-translate1/
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
            'X-RapidAPI-Key': '' // 
        },
        body: JSON.stringify(content),
    };

    return fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options) // GET
        .then(response => {
            return response.json();
        })
        .then(response => {
            return response.data.translations.translatedText
        })
        .catch((error) => {
            console.log('Error en petición broma Random', error)
        });
}

const textTranslate = async (textToTranslate) => {
    const translated = await getTranslate(textToTranslate);
    drawTranslation(translated);
}

const drawJoke = (jokeText) => {
    document.querySelector('.chuck-joke').innerText = jokeText;
}

const drawTranslation = (text) => {
    document.querySelector('.translation').innerText = text;
}

const changeJoke = async () => {
    const joke = await getJokeFromApi();
    drawJoke(joke.value);
    drawTranslation('Cargando traducción...');
    textTranslate(joke.value)
}

const addEvents = () => {
    const buttonChange = document.querySelector('#change-joke');
    buttonChange.addEventListener('click', changeJoke);
}

const initApp = async () => {
    addEvents();

    const joke = await getJokeFromApi();
    const jokeText = joke.value;
    textTranslate(jokeText);
    drawJoke(jokeText);
};

initApp();
