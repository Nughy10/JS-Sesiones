const init = () => {
    fetch('https://yomomma-api.herokuapp.com/jokes', {mode:'no-cors'})
        .then(res => res.json())
        .then(res => console.log('respuesta ->', res))
        .catch(error => console.log('error ->', error));
};

init();