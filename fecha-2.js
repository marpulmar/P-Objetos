class Fecha {
    //Atributos 
    dia
    mes
    anyo

    //Constructor
    constructor(dia, mes, anyo) {
        this.dia = dia
        this.mes = mes
        this.anyo = anyo
    }

    //Métodos 
    cambiaDia(nuevoDia) {
        this.dia = nuevoDia
    }

    cambiaMes(nuevoMes) {
        this.mes = nuevoMes
    }

    cambiaAnyo(nuevoAnyo) {
        this.anyo = nuevoAnyo
    }

    toStringCorto() {
        var texto
        if (this.dia < 10) {
            texto = "0" + this.dia + "/"
        }
        else {
            texto = this.dia + "/"
        }

        if (this.mes < 10) {
            texto += "0"
        }
        texto += this.mes
        texto += "/" + this.anyo
        return texto
    }

    anyoBisiesto() {
        var bisiesto = false
        if ((this.anyo % 400 == 0) || (this.anyo % 4 == 0 && this.anyo % 100 != 0)) {
            bisiesto = true
        }
        return bisiesto
    }

    duracionMes() 
    {
        var duracion = 31
        if (this.mes == 2) 
        {
            if (this.anyoBisiesto) 
            {
                duracion = 29
            }
            else
            { 
            
                duracion = 28
            }
        }
        else if ((this.mes <= 7 && this.mes % 2 == 0) || (this.mes >= 8 && this.mes % 2 != 0))
        {
            duracion = 30
        }
        return duracion
    }

    esValida() {
        var valida
        
    }
}

let fecha = new Fecha(4, 4, 2021)
console.log(fecha.toStringCorto())

//Ejercicio año bisiesto:
if (fecha.anyoBisiesto()) {
    console.log("El año " + fecha.anyo + " es bisiesto.")
}
else {
    console.log("El año " + fecha.anyo + " no es bisiesto.")
}

//Ejercicio duración mes:
console.log ("El mes tiene "+fecha.duracionMes()+" días.")


//Ejercicio fecha válida o no :
if (fecha.esValida()) {
    console.log("La fecha no es válida, el mes " + fecha.mes + " no tiene " + fecha.dia + " días.")
}
else if (fecha.mes == 2) {
    if (fecha.anyoBisiesto() && fecha.dia <= 29) {
        console.log("La fecha es válida.")
    }
    else if (fecha.anyoBisiesto() && fecha.dia > 29) {
        console.log("La fecha no es válida")
    }
    else if (fecha.dia <= 28) {
        console.log("La fecha es válida.")
    }
    else {
        console.log("La fecha no es válida.")
    }
}
else {
    console.log("La fecha es válida")
}