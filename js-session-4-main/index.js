function printLog() {
    console.log('Programar mola mucho! Acabo de clickar el botón');
};

function inputFocus(event) {
    console.log('He hecho focus en un Input');
    console.log(event);
}

document.querySelector('#input-middle').addEventListener('blur', function(event) {
    console.log('He hecho focus en el input con id input-middle');
    console.log(event);
    console.log('atributo name: ', event.target.name);
    console.log('value del input: ', event.target.value);
});

let keylogger = '';

function logKeys(event) {
    keylogger += event.key;
    console.log('Event keydown', keylogger);
}

document.body.addEventListener('keydown', logKeys);
document.body.removeEventListener('keydown', logKeys);

window.addEventListener('resize', function(event) {
    console.log('height: ', event.target.innerHeight);
    console.log('width: ', event.target.innerWidth);
})