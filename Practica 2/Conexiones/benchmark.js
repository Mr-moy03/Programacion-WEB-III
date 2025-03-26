// benchmark.js
const mysql = require('mysql2');
const mysqlPromise = require('mysql2/promise');
const { performance } = require('perf_hooks');

const dbConfig = {
    host: 'localhost', // Servidor de la base de datos
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña del usuario
    database: 'conexion_db' // Nombre de la base de datos
};

// Función para medir el tiempo de ejecución
async function measureTime(name, fn) {
    const start = performance.now();
    await fn();
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
}

// 1. Conexión básica con callbacks (similar a basic.js)
function testBasicConnection() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbConfig);

        connection.connect((err) => {
            if (err) {
                console.error('Error en conexión básica:', err);
                connection.end();
                return reject(err);
            }

            console.log('Conexión básica establecida');
            connection.query('SELECT * FROM db_conexion', (err, results) => {
                connection.end();
                if (err) return reject(err);
                console.log('Resultado (básico):', results);
                resolve();
            });
        });
    });
}

// 2. Conexión con promesas (similar a promise.js)
async function testPromiseConnection() {
    const connection = await mysqlPromise.createConnection(dbConfig);

    try {
        console.log('¡Conectado con promesas!');
        const [rows] = await connection.execute('SELECT * FROM db_conexion');
        console.log('Resultado (promesas):', rows);
    } catch (err) {
        console.error('Error en conexión con promesas:', err);
    } finally {
        await connection.end();
    }
}

// 3. Conexión con Pool (similar a pooling.js)
async function testPoolConnection() {
    const pool = mysql.createPool({
        ...dbConfig,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    const promisePool = pool.promise();

    try {
        console.log('Conexión con Pool establecida');
        const [rows] = await promisePool.query('SELECT * FROM db_conexion');
        console.log('Resultado (pool):', rows);
    } catch (err) {
        console.error('Error en conexión con pool:', err);
    } finally {
        await pool.end();
    }
}

// Ejecutar pruebas
async function runTests() {
    console.log('Iniciando pruebas de conexión...');

    await measureTime('Conexión básica (callback)', testBasicConnection);
    await measureTime('Conexión con promesas', testPromiseConnection);
    await measureTime('Conexión con Pool', testPoolConnection);

    console.log('Pruebas completadas');

}

runTests().catch(console.error);

// Opinión sobre el rendimiento de cada tipo de conexión

//Conexión básica:
// Es la más lenta porque establece una nueva conexión cada vez y usa callbacks,
// lo que puede generar un poco más de overhead.

//Conexión con promesas:
// Suele ser un poco más rápida que la básica porque usa async/await,
// lo que simplifica el manejo de errores y la lógica de control de flujo.

//Pool de conexiones: Es la más rápida porque reutiliza conexiones existentes en lugar de crear nuevas cada vez.
// Esto es especialmente notable en aplicaciones con muchas solicitudes concurrentes,
// donde el uso de un pool de conexiones reduce el costo de establecer nuevas conexiones.

