const yargs = require('yargs');

const geocode = require('./2-AsynchronousNodeWeatherApp/geocode');
const weather = require('./2-AsynchronousNodeWeatherApp/weather');

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


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else {
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        /** Chaining Callbacks Together */
        weather.getWeather(results.latitude, results.longitude, (errorMessage , weatherResults) =>{
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});
