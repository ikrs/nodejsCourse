const request = require('request');
const yargs = require('yargs');

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

// First argument is options object
// Second argument is callback function, this will get called when data comes back from api
request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=5FaLATH8xpsKmyy7uMLg9lTGUFXpQcoL&location=${encodedAddress}`,
    json: true //convert to object
}, (error,response,body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    //console.log(JSON.stringify(response, undefined, 2));
    //console.log(JSON.stringify(error, undefined, 2));

    console.log(`Address : ${body.results[0].providedLocation.location}`);
    console.log(`Lat : ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Lng : ${body.results[0].locations[0].latLng.lng}`);
});