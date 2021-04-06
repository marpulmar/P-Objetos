class Fecha 
{
    //Atributos 
    dia 
    mes
    anyo

    //Constructor
    constructor () 
    {
    this.dia = 23
    this.mes = 6
    this.anyo = 2000
    }

    //Métodos 
    esvalida ()
    {
        if (this.dia >=1 || this.dia<=31){}
    }

    cambiaMes (nuevoMes)
    {
        this.mes = nuevoMes
    }
    cambiaAnyo (nuevoAnyo)
    {
      this.anyo = nuevoAnyo  
    }
    describeFecha()
    {
        console.log ("El día: "+this.dia+"-"+this.mes+"-"+this.anyo)
    }
}   

let fecha = new Fecha (29)
fecha.describeFecha ()
fecha.cambiaMes (34)