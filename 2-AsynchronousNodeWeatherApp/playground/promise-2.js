/** Advanced Promises */
const request = require('request');

let geocodeAddress = address => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address)
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=5FaLATH8xpsKmyy7uMLg9lTGUFXpQcoL&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            // Copied from geocode.js
            if (error) {
                reject('Unable to connect to Google Servers!');
            } else if (body.results[0].locations[0].street === "") {
                reject('Unable to find that address!');
            } else {
                resolve({
                    address: body.results[0].providedLocation.location,
                    latitude : body.results[0].locations[0].latLng.lat,
                    longitude : body.results[0].locations[0].latLng.lng
                });
            }
        });
    });
};

geocodeAddress('00000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});