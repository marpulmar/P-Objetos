class Vehículo {
    marca
    modelo 

    constructor (marca,modelo){

        this.marca = "Renault"
        this.modelo = "Megan"
    }
}

class Coche extends Vehículo {
    numPuertas

    constructor (numPuertas){
        super ()
        this.numPuertas = 5
    }
}

class Moto extends Vehículo {
    cilindrada 

    constructor (marca,modelo,cilindrada){
        super (marca,modelo)
        this.cilindrada= 500
    }
}


//Programa:
let coche = new Coche()
console.log (coche.marca)
console.log (coche.modelo)
console.log (coche.numPuertas)