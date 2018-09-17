/** Abstracting Callbacks
 *
 * Moved from app.js
 * */

const request = require('request');

let geocodeAddress = (address, callback) =>
{
    let encodedAddress = encodeURIComponent(address);

// First argument is options object
// Second argument is callback function, this will get called when data comes back from api
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=5FaLATH8xpsKmyy7uMLg9lTGUFXpQcoL&location=${encodedAddress}`,
        json: true //convert to object
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        //console.log(JSON.stringify(response, undefined, 2));
        //console.log(JSON.stringify(error, undefined, 2));

        /** Callback Errors
         *
         * Changed if arguments from course because Google changed API logic
         * */
        if (error) {
            //console.log('Unable to connect to Google Servers!');
            callback('Unable to connect to Google Servers!');
        } else if (body.results[0].locations[0].street === "") {
            //console.log('Unable to find that address!');
            callback('Unable to find that address!');
        } else {
            // We set undefined for error message so that if statement in app.js will skip that logic
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                latitude : body.results[0].locations[0].latLng.lat,
                longitude : body.results[0].locations[0].latLng.lng
            });
            // console.log(`Address : ${body.results[0].providedLocation.location}`);
            // console.log(`Lat : ${body.results[0].locations[0].latLng.lat}`);
            // console.log(`Lng : ${body.results[0].locations[0].latLng.lng}`);
        }
    });
};

module.exports = {
    geocodeAddress
};