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