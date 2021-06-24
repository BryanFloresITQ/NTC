const { request } = require('express');
const express = require('express');

//genero una aplicacion
const app = express();

//EndPoint
app.get('/', (req,res) => {
    res.send("Hola mundo con ExpressJs");
});

app.get("/saludo",(req, res) => {

    //console.log(req.query);
    const { query: {nombre, apellido} } = req;

    //const nombre = req.query.nombre;
    //const apellido = req.query.apellido;

    res.json({
        saludo: `Hola soy ${nombre} ${apellido}`
    });

});

app.get('/saludo/:nombre', (req, res) => {

    const { params: {nombre} } = req;
    res.json({
        nombre: nombre
    })
})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});