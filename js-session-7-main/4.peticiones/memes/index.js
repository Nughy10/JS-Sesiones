const start = () => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(response => {
            console.log(response.data.memes);

            response.data.memes.forEach(meme => {
                const meme$$ = document.createElement('div');
                const memesContainer$$ = document.querySelector('.memes-container');

                const html = `
                    <h2>${meme.name}</h2>
                    <img style="width: 400px" src=${meme.url}>
                `;

                meme$$.innerHTML = html;

                memesContainer$$.appendChild(meme$$);
            });
        })
        .catch(error => console.log('Error en petición', error));
}

start();