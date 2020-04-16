
// importar libreria sqlite3
const sqlite3 = require('sqlite3');

// crear objeto para manipular BDD y a la vez, abrir conexion.
// El arg que se envia es el nombre que se le va a dar a la BDD (proyecto-backend-db)
let db = new sqlite3.Database('proyecto-backend-db');

// ejecutar consulta para crear tabla "tasks", luego del commit comentar, para no ejecutar otra vez
// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');



// cerrar la conexion
db.close();
