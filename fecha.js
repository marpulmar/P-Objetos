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
    esvalida ()
    {
        if (this.dia >=1 || this.dia<=31 && (this.mes >=1 || this.mes <=12)) {}
    }
    cambiaDia (nuevoDia) 
    {
        this.dia = nuevoDia
    }
    cambiaMes (nuevoMes)
    {
        this.mes = nuevoMes
    }
    tiStringCorto()
    {
        console.log ("El día: "+this.dia+"-"+this.mes+"-"+this.anyo)
    }
}   

let fecha = new Fecha (6,4,2021)
fecha.toStringCorto ()
fecha.cambiaDia (36)
fecha.cambiaMes (6)
fecha.toStringCorto ()

