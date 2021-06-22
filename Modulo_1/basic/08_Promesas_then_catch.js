/*
   Promesas
*/

function promesa(bandera){

    return new Promise((resolve, reject) => {
       
       if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta");
        }, 3000);
       } else {
           reject("La operacion fallo");
       }

        
    });
}
/* 
promesa(true).
    then((resultado) => {
        console.log(resultado);
    }).
    catch((error) => {
        console.log(error);
    });
*/

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta");
        }, 3000);
       } else {
           reject("La operacion fallo");
       }
})

segundaPromesa(true).
    then((respuesta) => {console.log(respuesta);}).
    catch((error) => {console.log(error);});


promesa(true). //Peticion de Clientes
    then((resultado) => { //Respuesta de Clientes
        console.log(resultado);
        return segundaPromesa(true) //Compras del Cliente
    }).
    then((respuesta) => {console.log(respuesta);}). //Respuesta de la segunda promesa
    catch((error) => {
        console.log(error);
    });