/**
 * Scope: (ámbito) que se genera dentro de una nueva función o un nuevo if
 * siempre y cuando lleven { } llaves de apertura y cierre.
 * 
 * function() { aquí dentro hay un nuevo scope } 
 * 
 * Closure: (contexto). Nos queda claro que desde un ámbito exterior no se puede acceder
 * hacia un ámbito interior. Pero desde dentro si se puede leer lo que hay fuera.
 * 
 * Para acceder desde fuera a variables que estén dentro de otras funciones, necesitamos
 * usar funciones que los retornen, por lo tanto al igualar desde fuera cualquier variable
 * a la ejecución de estas funciones internas, obtendremos (desde fuera) el valor que está
 * definido dentro.
 * 
 * Para acceder a un valor de dentro hacia fuera no hay que hacer nada.
 * Para acceder de fuera hacia dentro, tiene que estar retornado el valor.
 */

const publicMessage = 'Mensaje público guardado en el scope global';

const exterior = () => {
    console.log('Funcion exterior ejecutándose...');
    
    const interior = () => {
        console.log('Funcion interior ejecutándose...');
    
        const secretMessage = 'Mensaje secreto guardado dentro de función interna';

        return secretMessage;
    }
    
    return interior;
};

console.log(exterior()());

// console.log('Mensaje Secreto desde fuera!! ', mensajeSecreto);

// Desde aquí, quiero acceder a secretMessage!!