class Vehículo {
    marca
    modelo

    constructor(marca, modelo) {

        this.marca = marca
        this.modelo = modelo
    }
}

class Coche extends Vehículo {
    numPuertas

    constructor(numPuertas, marca, modelo) {
        super(marca, modelo)
        this.numPuertas = numPuertas
    }
}

class Moto extends Vehículo {
    cilindrada

    constructor(marca, modelo, cilindrada) {
        super(marca, modelo)
        this.cilindrada = cilindrada
    }
}


//Programa:
let moto = new Moto("BMW", "HOLA", 500)
console.log("La marca de la moto es " + moto.marca)
console.log("El modelo de la moto es " + moto.modelo)
console.log("La cilindrada de la moto es " + moto.cilindrada)

let coche = new Coche(4, "Fiat", "Panda")
console.log("El númro de puertas del coche son " + coche.numPuertas)
console.log("La marca del choche es " + coche.marca)
console.log("El modelo del coche es " + coche.modelo)