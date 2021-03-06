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

    duracionMes() {
        var duracion = 31
        if (this.mes == 2) {
            if (this.anyoBisiesto()) {
                duracion = 29
            }
            else {

                duracion = 28
            }
        }
        else if ((this.mes <= 7 && this.mes % 2 == 0) || ((this.mes >= 8 && this.mes <= 12) && this.mes % 2 != 0)) {
            duracion = 30
        }
        else {
            duracion = false
        }
        return duracion
    }

    esValida()
    {
        var valida = true
        if ((this.mes > 12 || this.mes < 1) || (this.dia > this.duracionMes() || this.dia < 1)) {
            valida = false
        }
        return valida
    }
}