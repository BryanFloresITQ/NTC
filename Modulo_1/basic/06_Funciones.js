/*

   FUNCIONES DECLARATIVAS

*/

//Retorno de Valores
function saludar(){
   return "Hola soy Bryan";
}

//Funciones void
function saludar2() {
    console.log("Hola Soy Andres");
}

//Funciones con parametros
function SaludarConParametros(Nombre, Apellido) {
    return `Hola soy ${Nombre} ${Apellido}`;
}

//Funciones con paraemtros por defecto
function SaludoConProfesion(nombre="Persona", profesion="Analista en Sistemas") {
    return `Hola ${nombre} mi profesion es ${profesion}`
}

//console.log(SaludoConProfesion("Bryan"));

//console.log(SaludarConParametros("Bryan", "Flores"));

/*
var result = saludar()

console.log(result);
console.log(saludar());
saludar2();
*/


/*
   FUNCIONES EXPRESIVAS - FUNCIONES ANONIMAS
*/

var SaludoConEdad = function(nombre, edad){

    return `Hola soy ${nombre} y tengo ${edad} años`;

}

//console.log(SaludoConEdad("Bryan", 21));

/*
   ARROW FUNCTIONS - FUNCIONES FLECHA
*/

var SaludoApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`;

var suma = (num1, num2) => num1 + num2;

//console.log(SaludoApellido("Bryan", "Flores"));

//console.log(suma(3,2));

/* 
   FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES
*/

function SaludoConFunciones(nombre, cb) {
    return cb(nombre);
}

var miSaludo = SaludoConFunciones("Bryan", function(nombre){
    return `Hola soy ${nombre}`;
});

//console.log(miSaludo)

/*
setTimeout(() => {
    console.log("Hola Mundo");
}, 3000);
*/
setInterval(() => {
    console.log("Hola Mundo");
}, 2000);