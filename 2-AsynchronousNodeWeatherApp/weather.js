/** Chaining Callbacks Together*/

const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c39162741c3a998c200f4584e4055b13/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather information!');
        }
    });
};

module.exports = {
    getWeather
};