// INTRODUCCION A CLASES ES6

class Docente
{
    constructor(name){
        this.name = name
    }
    mostrarNombre()
    {
        console.log(this.name + " Docente  UES-FMO");
    } 
}    
var mostrarDocente = new Docente("Luis Iraheta");
mostrarDocente.mostrarNombre();
