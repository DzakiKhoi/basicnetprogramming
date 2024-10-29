const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
    host: 'localhost',      // Host MySQL (misal, localhost)
    user: 'root',           // Nama pengguna MySQL
    password: '',           // Kata sandi MySQL
    database: 'biodata'  // Nama database yang Anda buat
});

// Terhubung ke MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

module.exports = connection;