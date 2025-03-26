// basic.js
const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // Servidor de la base de datos
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña del usuario
    database: 'conexion_db' // Nombre de la base de datos
});


connection.connect((err) => {
    if (err) {
        console.error('Error al conectar:', err);
        return;
    }
    console.log('Conexión básica establecida');

    // Ejecutar una consulta simple
    connection.query('SELECT * FROM db_conexion', (err, results,fields) => {
        if (err) throw err;
        console.log('Resultado:', results);

        // Cerrar la conexión
        connection.end();
    });
});


