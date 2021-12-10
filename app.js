const axios = require('axios');


const city = process.argv[2];
const api = 'b429e59eb39043ba9ff105752211411';
const url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`;


axios.get(url)
.then(response => {
    console.log(`Weather in "${city}" is ${response.data['current']['temp_c']} C`);
    console.log(`Having a "wind speed" is ${response.data['current']['wind_kph']} Km/H 
and "direction" towards ${response.data['current']['wind_dir']}`);
})
.catch(err => console.log('error is :', err));