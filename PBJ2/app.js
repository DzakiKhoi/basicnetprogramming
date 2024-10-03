const fs = require('fs') 
fs.writeFileSync('catatan.txt', 'Nama Saya Dzaki Khoirullah Winadri') 
fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')

const catatan = require('./catatan.js') 
const pesan = catatan() 
console.log(pesan)