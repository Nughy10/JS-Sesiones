// Forma normal de importar, haciendo destrúcturing en el import
import { sum, str, isTrue, leon } from "./other-file.js";
import alumnado from "./other-file.js";
import multiplicacion from "./third-file.js";

// Import asignando un nuevo nombre
// import {sum as sumita, str } from "./other-file.js";

// Importar todo y asignar un nombre
// import * as pepe from "./other-file.js";


/**
 * Nos quedamos con lo siguiente
 * 
 * export const pepe = 'pepe';
 * import {pepe} from './file-path.js'
 * 
 * 
 * const pepe = 'pepe';
 * export default pepe;
 * import pepe from './file-path';
 */

console.log("Estoy en el archivo index de JS");
console.log(str);
console.log(sum(18, 10));
console.log("isTrue: ", isTrue);

console.log(multiplicacion(3, 5));

console.log(alumnado);
console.log(leon);