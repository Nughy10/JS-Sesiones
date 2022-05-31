/**
 * La herencia es la posiblidad de recibir propiedades de un elemento superior.
 */

class Vehiculo {
    constructor(tipo, motor, marca, modelo) {
        this.tipo = tipo;
        this.motor = motor;
        this.marca = marca;
        this.modelo = modelo;
    };

    getMotor() {
        return `Tiene un motor de ${this.motor}`;
    }

    getModelo() {
        return `Mi vehículo es un ${this.tipo} de marca ${this.marca}, modelo ${this.modelo}`
    }
};

class Coche extends Vehiculo {
    constructor(marcaC, modelo, motor, ruedas) {
        super('Coche', motor, marcaC, modelo);
        this.ruedas = ruedas;
    }

    getRuedas() {
        console.log(`Mi ${this.tipo} tiene ${this.ruedas} ruedas`);
    }

    static getConcesionarios() {
        return ['Alcobendas', 'Madrid Centro', 'Ciudad Lineal', 'SS. Reyes'];
    };
};

class Moto extends Vehiculo {
    constructor(motor, marca, modelo, cv) {
        super('Moto', motor, marca, modelo);
        this.cv = cv;
    }

    get caballosVapor() {
        return `Mi moto tiene ${this.cv} caballos de vapor`;
    }

    set caballosVapor(newCv) {
        this.cv = newCv;
        console.log(`Nuevos cv: ${this.cv}`);
    }

    getMotor() {
        console.log('Brum Brum... moto marronera');
    }

    setCv(newCv) {
        this.cv = newCv;
        console.log(`Nuevos cv: ${this.cv}`);
    }
}

// const cocheCani = new Coche('Seat', 'Ibiza - Tunning Edition', 'diesel', 4);
// console.log(cocheCani.getModelo());
// cocheCani.getRuedas();

const motoMarronera = new Moto('gasolina', 'Kawasaki', 'Ninja', 160)
console.log(motoMarronera.getMotor());

console.log(motoMarronera.caballosVapor);

motoMarronera.caballosVapor = 300;
motoMarronera.setCv(240);