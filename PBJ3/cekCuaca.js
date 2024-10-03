const request = require('postman-request');

// Mengubah ke Fahrenheit 
const urlCuaca = 'http://api.weatherstack.com/current?access_key=9171b5925ca219298c4874b016ae6a6b&query=-0.8969206647459452,100.35076508271707&units=f';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Tidak dapat menghubungi layanan cuaca! Pastikan Anda terhubung ke internet.');
        console.log('Error:', error);
    } else if (response.body.error) {
        console.log('Error dari API: ', response.body.error.info);
    } else {
        const temperature = response.body.current.temperature; // Suhu 
        const rainChance = response.body.current.precip; // Kemungkinan hujan
        const weatherDescription = response.body.current.weather_descriptions[0]; // Deskripsi cuaca

        // Tampilkan informasi cuaca
        console.log(`Saat ini suhu di luar mencapai ${temperature} derajat Fahrenheit.`);
        console.log(`Kemungkinan terjadinya hujan adalah ${rainChance}%.`);
        console.log(`Deskripsi cuaca: ${weatherDescription}.`);
    }
});