// Traemos el paquete
const { Router } = require('express');
const data  = require('../Data.json');


//Inicializamos Router
const router = Router();

//Creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola mundo 2");
    })
    .get("/codigo",(req, res) => {

        const { query: {id} } = req;
    
        var filtrarID = data.filter((persona) => persona.id == id);

        res.json(filtrarID);
    
    })
    .get('/:nombre', (req, res) => {

        const { params: {nombre} } = req;
        var filtrarNombre = data.filter((persona) => persona.first_name == nombre);
        res.json(filtrarNombre);
    });

//Exportamos las rutas
module.exports.RouterIndex = router;