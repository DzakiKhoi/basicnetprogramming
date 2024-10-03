const fs = require('fs');  // Tetap gunakan fs untuk file system

// Kode sebelumnya dikomentari
// const buku = {
//     judul: 'Pemrograman Jaringan',
//     penulis: 'Randi Proska Sandra'
// };
// const bookJSON = JSON.stringify(buku);
// fs.writeFileSync('1-jsontest.json', bookJSON);

// Kode baru untuk membaca data dari file JSON
const dataBuffer = fs.readFileSync('1-jsontest.json');  // Membaca file JSON
const dataJSON = dataBuffer.toString();  // Mengubah buffer menjadi string
const data = JSON.parse(dataJSON);  // Mengubah string menjadi objek JavaScript

console.log(data.judul);  // Menampilkan seluruh objek