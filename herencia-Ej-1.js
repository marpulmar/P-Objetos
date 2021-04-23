class Vehiculo {
    marca
    modelo

    constructor(marca, modelo) {

        this.marca = marca
        this.modelo = modelo
    }
    describir() {
        console.log("Vehículo: " + this.marca + " " + this.modelo)
    }
}

class Coche extends Vehiculo {
    numPuertas

    constructor(numPuertas, marca, modelo) {
        super(marca, modelo)
        this.numPuertas = numPuertas
    }
    describir() {
        console.log("Coche: " + this.marca + " " + this.modelo + ", " + this.numPuertas + " puertas.")
    }
}

class Moto extends Vehiculo {
    cilindrada

    constructor(marca, modelo, cilindrada) {
        super(marca, modelo)
        this.cilindrada = cilindrada
    }
    describir() {
        console.log("Moto: " + this.marca + " " + this.modelo + ", " + this.cilindrada + " cilindros.")
    }
}


//Programa:
let vehiculo = new Vehiculo("Ford", "Focus")
vehiculo.describir()

let coche = new Coche(4, "Fiat", "Panda")
coche.describir()

let moto = new Moto("Yamaha", "CBR", 500)
moto.describir()