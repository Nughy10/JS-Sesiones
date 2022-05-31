/**
 * Método estático (static)
 * 
 * No se añaden a las instancias.
 * Se ejecutan directamente desde la clase.
 */

class Coche {
    constructor(modelo) {
        this.modelo = modelo;
    }

    static getConcesionarios() {
        return ['Alcobendas', 'Madrid Centro', 'Ciudad Lineal', 'SS. Reyes'];
    };
}

// const myCar = new Coche('Mercedes');
// console.log(myCar.getConcesionarios());

console.log(Coche.getConcesionarios());


