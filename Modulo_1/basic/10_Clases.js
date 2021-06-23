/*
//Como se hacia antes

function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura;
}

var rectangulo = new Rectangulo(6, 3);

//console.log(rectangulo.calcularArea());

// Declaracion de clases

class Rectangulo2 {
    constructor(base, altura){
        this.base = base;
        this.altura = altura; 
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

var rectangulo2 = new Rectangulo2(3, 6); */

//console.log(rectangulo2.calcularArea());

// Clase Persona
// implementar getters, setters y realizar una implementacion
// implementar metodos estaticos - Clase Punto, distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona

/* 
    DEBER 
*/

class Persona{

    constructor(nombre, apellido, ci, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.edad = edad;
    }

    get saludo(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido}, mi edad es ${this.edad} y tengo mi numero de cedula ${this.ci}`;
    }

    set agregar_persona(datos){

        const vector = datos.split(" ");
        this.nombre = vector[0];
        this.apellido = vector[1];
        this.ci = vector[2];
        this.edad = vector[3]
    }

    traerPersona(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido}, mi edad es ${this.edad} y tengo mi numero de cedula ${this.ci}`;
    }

}

var person = new Persona("Bryan", "Flores", "1724440092", 21);
console.log(person.saludo);
person.agregar_persona = "Andres Obando 171568155 22";
console.log(person.saludo);


class Punto {

    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {

      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }

  }

  var punto1 = new Punto(5, 4);
  var punto2 = new Punto(9, 7);
  
  console.log ("La distancia entre los puntos es: "+Punto.distancia(punto1, punto2));

  class estudiante extends Persona{

    traerPersona(prom){
        return `${this.nombre} tiene un promedio de ${prom}`;
    }

  }

  var persona_estudiante = new estudiante("Bryan");
  console.log(persona_estudiante.traerPersona(9.8));