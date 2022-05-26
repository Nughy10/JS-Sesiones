const fabricarBalon = (funcionCallback) => {
    console.log('Empieza la cadena de producción');

    setTimeout(() => console.log('Se le da forma al balón...'), 2000);

    setTimeout(() => console.log('El balón está listo para meterlo en su envase...'), 4000);

    setTimeout(() => funcionCallback(), 6000);
}

fabricarBalon(function() {
    console.log('El balón está terminado y llamamos al transportista para que lo recoja');
});