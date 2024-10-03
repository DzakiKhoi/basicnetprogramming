const request = require('postman-request') 
const url = 'http://api.weatherstack.com/current?access_key=f64fc8540bd3c30a0a0137e8fedb134e&query=-0.8969206647459452,100.35076508271707';

request({ url: url, json: true }, (error, response) => {
    console.log(response)
    const data = response.body;
    console.log('Informasi Cuaca:');
    console.log('Suhu saat ini: ' + data.current.temperature + '°C');
    console.log('Deskripsi cuaca: ' + data.current.weather_descriptions[0]);
    //}
})
