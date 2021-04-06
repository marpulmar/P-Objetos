console.log ("Hola mundo!")
class Poligono 
{
    //Atributos
    lados 
    color 

    //Constructor
    constructor (numLados)
    {
        this.lados = numLados
        this.color = "blanco"
    }

    //Métodos
    cambiaColor (nuevoColor)
    {
        this.color = nuevoColor
    }
    describePoligono ()
    {
        console.log ("Lados: "+ this.lados + ", color: "+this.color)
    }
}
let triangulo = new Poligono(3)
triangulo.describePoligono()
triangulo.cambiaColor("azul")
triangulo.describePoligono()