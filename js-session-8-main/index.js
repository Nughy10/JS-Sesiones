/**
 * Dijimos que una clase tiene atributos y métodos.
 * 
 * Los atributos los podemos asignar cuando creamos un hijo (instancia) de la clase
 * Es decir, se los pasamos en new Molde(), y los asignamos en constructor() {}.
 */

class Carcasa { // La primera letra siempre en mayúsculas. 
    constructor(marca, anchura, altura) {
        this.marca = marca;
        this.anchura = `tiene una anchura de ${anchura}cm`;
        this.altura = altura;
    };
};

const carcasaDeIphone = new Carcasa('Apple', 12, 18);
const carcasaDeSamsung = new Carcasa('Samsung', 14, 20);
console.log(carcasaDeIphone);

console.log(`carcasaDeIphone es de la marca ${carcasaDeIphone.marca} y ${carcasaDeIphone.anchura} y una altura de ${carcasaDeIphone.altura}`);

// console.log(carcasaDeSamsung);
