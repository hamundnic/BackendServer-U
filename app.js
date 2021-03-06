// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables

var app = express();

// conexion a la base de datso

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Bases de Datos : \x1b[32m%s\x1b[0m', 'online');
});


// rutas

app.get('/', (req, res, next) => {
    res.status(404).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
})




// Escuchar peticiones

app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})