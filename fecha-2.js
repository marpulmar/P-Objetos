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

    cambiaAnyo (nuevoAnyo) 
    {
        this.anyo = nuevoAnyo
    }

    toStringCorto () 
    {
        var texto
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
            texto += "0"
        }
        texto += this.mes
        texto += "/"+this.anyo
        console.log (texto)
    }

    anyoBisiesto () 
    {
        var bisiesto = false
        if ((this.anyo % 400 == 0) || (this.anyo % 4 == 0 && this.anyo % 100 != 0))
        {
            bisiesto = true
        }
        return bisiesto
    }
}   

let fecha = new Fecha (6,4,2021)
fecha.toStringCorto ()
console.log (fecha.anyoBisiesto())
if (fecha.anyoBisiesto ()) 
{
 console.log ("El año es bsiesto.")
}
else 
{
    console.log ("El año no es bisiesto.")
}
fecha.cambiaAnyo (2020)
fecha.toStringCorto ()
console.log (fecha.anyoBisiesto ())

