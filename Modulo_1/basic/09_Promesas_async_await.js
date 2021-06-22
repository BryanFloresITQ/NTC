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

(async () => {

    try {
        
    var respuesta = await promesa(true);
    var respuesta2 = await promesa(true);
    console.log(respuesta);
    console.log(respuesta2);

    } catch (error) {
        console.log(error);
    }

})()