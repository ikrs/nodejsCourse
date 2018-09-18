/** Weather App with Promises */
    //Copied from app.js, this is now a whole application
const yargs = require('yargs');
const axios = require('axios');

// User will enter command over CLI
const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help','h')
    .argv;


let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=5FaLATH8xpsKmyy7uMLg9lTGUFXpQcoL&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    //console.log(response.data);
    if (response.data.results[0].locations[0].street === ""){
        // Throwing an error
        throw new Error('Unable to find that address!');
    }

    let lat = response.data.results[0].locations[0].latLng.lat;
    let lng = response.data.results[0].locations[0].latLng.lng;
    let weatherUrl = `https://api.darksky.net/forecast/c39162741c3a998c200f4584e4055b13/${lat},${lng}`;

    console.log(response.data.results[0].providedLocation.location);

    return axios.get(weatherUrl);

}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});