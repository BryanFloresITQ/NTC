/*
Asignacion
=

Comparacion
==
===
console.log(2==2);
console.log(2==='2');
console.log(2=='2');

*/

/*
Diferente
!=

console.log(2!=3)

*/

/*

<
>
<=
>=

*/

/*

Operadores de Asignacion Compuestos

+= / x=x+y
-= / x=x-y
*= / x=x*y
/= / x=x/y
%= / x=x%y
**= / x=**y

var numero = 3;
numero += 2;
console.log(numero);

*/

/*

Operadores Aritmeticos

+
-
*
/
%
**

*/

/*

Desestructurar Objetos


*/

var persona = {
    nombre: "Bryan", 
    apellido: "Flores",
    edad: 21,
    viajes:{
        destino1: "Colombia",
        destino2: "Mexico"
    }
};

var { nombre:nom, apellido, viajes:{destino1} } = persona;

console.log(persona);
console.log(nom);
console.log(apellido);
console.log(destino1);