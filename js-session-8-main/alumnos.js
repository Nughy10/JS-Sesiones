class Alumno {
    constructor(nombre, apellido, notaMedia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreCompleto = `${nombre} ${apellido}`;
        this.notaMedia = notaMedia;
    }

    empezarAEstudiar() {
        console.log(`El alumno ${this.nombreCompleto} ha empezado a estudiar`);
    }

    incrementarNota(puntos) {
        this.notaMedia = this.notaMedia + puntos;
        this.empezarAEstudiar();
        return `La nueva nota de ${this.nombre} es ${this.notaMedia}`;
    }
};

const fran = new Alumno('Fran', 'Riquelme', 8.5);
const victor = new Alumno('Victor', 'León', 7);
const luis = new Alumno('Luis', 'Camino', 6);
const mireia = new Alumno('Mireia', 'García', 9);

fran.empezarAEstudiar();

console.log(victor.incrementarNota(3));


/**
 * Crea una clase Coche con al menos 3 propiedades new Coche(propiedad1, propiedad2, propiedad3)
 * 
 * Una propiedad (que no recibe el constructor) es this.abierto = false;
 * 
 * Crea un método de clase que abra el coche (this.abierto = true);
 * 
 * Crea un método de clase que haga un console.log de alguna propiedad de clase.
 * 
 * Con todo esto, crearemos una instancia de un Seat Panda.
 */

class Coche {
    constructor(puertas, luces, color, marca, modelo) {
        this.puertas = puertas;
        this.luces = luces;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.abierto = false;
    };

    gestionarApertura() {
        this.abierto = !this.abierto;
        console.log(`El coche está ${this.abierto ? 'abierto' : 'cerrado'}`);
        return this.abierto;
    }

    dimeMiModelo() {
        console.log(`Tienes un ${this.marca} ${this.modelo}`);
    }
}

const myCar = new Coche(3, true, 'Blanco', 'Seat', 'Panda');

console.log(myCar);

myCar.gestionarApertura();
myCar.gestionarApertura();
myCar.gestionarApertura();
myCar.dimeMiModelo();
