class Fecha 
{
    //Atributos 
    dia 
    mes
    anyo

    //Constructor
    constructor (dia,mes,anyo) 
    {
    this.dia = dia
    this.mes = mes
    this.anyo = anyo
    }

    //Métodos 
    cambiaDia (nuevoDia) 
    {
        this.dia = nuevoDia
    }

    cambiaMes (nuevoMes)
    {
        this.mes = nuevoMes
    }

    toStringCorto () 
    {
        var texto = this.dia
        if (this.dia<10)
        {
            texto= "0"+this.dia+"/"
        }
        else 
        {
            texto= this.dia+"/"
        }
    
        if (this.mes<10)
        {
            texto= "0"+this.mes+"/"
        }
        else 
        {
            texto= this.mes+"/"
        }
        texto += this.mes
        texto += "/"+this.anyo
        console.log (texto)
    }
}   

let fecha = new Fecha (6,4,2021)
fecha.toStringCorto ()
fecha.cambiaDia (29)
fecha.cambiaMes (6)
fecha.toStringCorto ()
fecha.cambiaDia (8)
fecha.cambiaMes (4)
fecha.toStringCorto ()
fecha.cambiaDia (29)
fecha.cambiaMes (11)
fecha.toStringCorto ()