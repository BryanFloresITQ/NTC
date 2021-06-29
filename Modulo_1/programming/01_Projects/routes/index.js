// Traemos el paquete
const { Router } = require('express');
const { User } = require('../lib/Schema/User');
//const data = require('./Data.json');
const { DataValidator } = require('../middlewares/DataValidator');


//Inicializamos Router
const router = Router();

//Creacion de los endpoint
router
    .get("/", DataValidator, (req, res) => {
        res.send("Hola Mundo con ExpressJS");
    })
    .get("/saludo", DataValidator("query", User), (req, res) => {

        //console.log(req.query);
        const { query: {nombre, apellido} } = req;
    
        //const nombre = req.query.nombre;
        //const apellido = req.query.apellido;
    
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`
        });
    
    })
    .get('/saludo/:nombre', (req, res) => {

        const { params: {nombre} } = req;
        res.json({
            nombre: nombre
        })
    });

//Exportamos las rutas
module.exports.RouterIndex = router;