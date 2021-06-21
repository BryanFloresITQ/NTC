/* Arreglos */

var numeros = [1,2,3,4,5];

var nuevoNumeros = numeros.concat([6,7,8,9,0])

//console.log(numeros);
//console.log(nuevoNumeros);

/* Join */

var nombre = ["b","r","y","a","n"];

//console.log(nombre.join(""));

/* Slice */

//console.log(nombre.slice(3));

/* IndexOf */

//console.log(nombre.indexOf("n"));

/* LastIndexOf */

//console.log(nombre.lastIndexOf("a"));

/* Reverse */

//console.log(nombre.reverse());

/* Sort */

var numerosDesordenados = [2,4,1,6,8,5,0];

//console.log(numerosDesordenados.sort());

/* Shift */

//console.log(numerosDesordenados.shift());

/* Pop */

//console.log(numerosDesordenados.pop());

/* Push */

//numerosDesordenados.push(1999)
//console.log(numerosDesordenados);

/* Map */

var pares = [2,4,6,8,10];

//console.log(pares.map((par) => par + 1));



/*

//-----------Consultar funciones de modificaciones de arreglos.(min. 5)--------

var arreglo = [1,2,3,4,5,6];

//---------- 1) FOREACH

arreglo.forEach(item => {
    console.log(item+1);
})

//---------- 2) INCLUDES

console.log(arreglo.includes(5)); //True

//---------- 3) FILTER

var filtrado = arreglo.filter(num => num < 3);

console.log(filtrado);

//---------- 4) REDUCE

var suma = arreglo.reduce((total, valor) => total + valor, 0);
console.log(suma);

//---------- 5) SOME

console.log(arreglo.some((num) => num < 0));

//---------- 6) EVERY

console.log(arreglo.every((num) => num > 0));

//---------- 7) ARRAY.OF

var numeros2 = Array.of(2,5,3,1,6);

console.log(numeros2);

*/