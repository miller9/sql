// importar libreria sqlite3, express, body-parser
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

// middleware para info del msn Http
app.use(bodyParser.urlencoded({extended: true}));

// crear objeto para manipular BDD y a la vez, abrir conexion.
// El arg que se envia es el nombre que se le va a dar a la BDD (proyecto-backend-db)
let db = new sqlite3.Database('proyecto-backend-db');

// ejecutar consulta para crear tabla "tasks", luego del commit comentar, para no ejecutar otra vez
// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

// crear ruta POST para insertar datos en la tabla. ruta: 'http://localhost:3000/pendientes'
app.post('/pendientes',function(req,res){
  db.run(`INSERT INTO tasks(description) VALUES('${req.body.description}')`); // consulta SQL para agregar datos
  res.send('Insercion Finalizada'); //respuesta de la ejecucion de la consulta
})

// puerto para escuchar
app.listen(3000);

// objeto para escuchar eventos relacionados con el proceso
process.on('SIGINT',function(){
    console.log('Adios desde El server');
    db.close(); // cerrar la conexion
    process.exit(); // cierra el servidor de Node
})
