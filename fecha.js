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
    esValida ()
    {
        if (this.dia >=1 && this.dia<=31 && (this.mes >=1 && this.mes <=12)) 
        {
            console.log ("La fecha es válida.")   
        }
        else 
        {
            console.log ("La fecha no es válda.")
        }
    }
    cambiaDia (nuevoDia) 
    {
        this.dia = nuevoDia
    }
    cambiaMes (nuevoMes)
    {
        this.mes = nuevoMes
    }
    toStringCorto()
    {
        console.log ("El día: "+this.dia+"-"+this.mes+"-"+this.anyo)
    }
}   

let fecha = new Fecha (6,4,2021)
fecha.toStringCorto ()
fecha.esValida()
fecha.cambiaDia (36)
fecha.cambiaMes (6)
fecha.toStringCorto ()
fecha.esValida()

