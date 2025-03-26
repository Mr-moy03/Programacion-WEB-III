//promise.js
const mysql = require('mysql2/promise');

async function main() {
    try {
        // Conectar a la base de datos usando promesas
        const connection = await mysql.createConnection({
            host: 'localhost', // Servidor de la base de datos
            user: 'root', // Usuario de la base de datos
            password: '', // Contraseña del usuario
            database: 'conexion_db' // Nombre de la base de datos
        });

        console.log('¡Conectado a la base de datos MySQL!');

        // Ejecutar una consulta usando promesas
        const [rows, fields] = await connection.execute('SELECT * FROM db_conexion');
        console.log('Resultado:', rows);

        // Cerrar la conexión
        await connection.end();
    } catch (err) {
        console.error('Error:', err);
    }
}

main();

