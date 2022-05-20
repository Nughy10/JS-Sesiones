let nombre = 'Lola';
let apellido = 'Gutierrez';

/**
 * Cuando definimos variables con 'var' dentro de una función (o scope)
 * javascript inicializa las variables automáticamente al principio de la función
 * con valor undefined.
 * 
 * Al usar let y const esto no ocurre.
 * 
 * Por lo tanto, buenas prácticas:
 * Usar siempre let y const.
 * Definir las variables al principio de cada función.
 */

function pepe() {    
    let nombre = 'Pepe';
    let apellido = 'Martínez';

    console.log(nombre);
    console.log(apellido);
}

pepe();