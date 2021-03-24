console.log ("Hola mundo!")
class Poligono 
{
    lados 
    color 
    constructor (numLados)
    {
        this.lados = numLados
        this.color = "blanco"
    }
    cambiaColor (nuevoColor)
    {
        this.color = nuevoColor
    }
    describePoligono ()
    {
        console.log ("Lados: "+ this.lados + ", color: "+this.color)
    }
}