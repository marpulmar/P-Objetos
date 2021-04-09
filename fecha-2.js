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
        return texto
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

    duracionMes () 
    {
        var treintayunodias = false
        if ((this.mes <= 7 && this.mes % 2 != 0) || (this.mes >=8 && this.mes % 2 == 0))
        {
            treintayunodias = true
        }
        return treintayunodias
    }
}   

let fecha = new Fecha (6,2,2020)
console.log (fecha.toStringCorto())

//Ejercicio año bisiesto:
if (fecha.anyoBisiesto ()) 
{
 console.log ("El año "+ fecha.anyo + " es bisiesto.")
}
else 
{
    console.log ("El año " + fecha.anyo +" no es bisiesto.")
}

//Ejercicio duración mes:
if (fecha.duracionMes())
{
    console.log ("El mes " + fecha.mes + " tiene 31 días.")
}
else if (fecha.mes ==2) 
{
    if (fecha.anyoBisiesto) 
    {
        console.log ("El mes 2 tiene 29 días.")
    }
    else 
     {
        console.log ("El mes 2 tiene 28 días.")
     }
}
else 
{
    console.log ("El mes " + fecha.mes + " tiene 30 días.")
}