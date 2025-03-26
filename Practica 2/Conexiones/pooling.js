//pooling.js
const mysql = require('mysql2');

// Crear un pool de conexiones
const pool = mysql.createPool({
    host: 'localhost', // Servidor de la base de datos
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña del usuario
    database: 'conexion_db', // Nombre de la base de datos
    waitForConnections: true, // Esperar conexiones si el pool está lleno
    connectionLimit: 10, // Límite máximo de conexiones en el pool
    queueLimit: 0 // Límite de consultas en espera (0 significa ilimitado)
});

// Consultar la base de datos usando una conexión del pool
pool.query('SELECT * FROM db_conexion', (err, results, fields) => {
    if (err) throw err;
    console.log('Resulatdo: ',results); // Mostrar los resultados en la consola
});
