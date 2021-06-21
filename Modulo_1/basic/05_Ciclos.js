/*
//While
while(condition){

};

//For
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
};

*/

//For in
var persona = {
    nombre: "Bryan",
    flores: "Flores",
    viajes: ["",""]
};

for (const key in persona) {
    console.log(persona[key])
}

var iterable = [1,2,3,4,5];
var iterable2 = "Bryan";

for (const valor of iterable2) {
    console.log(valor);
}