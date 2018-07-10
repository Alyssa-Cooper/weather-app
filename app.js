const request = require('request');

request({
  url: 'https://api.forecast.io/forecast/d874141aa8c46f2e028f983c8f6949a4/39.9396284,-75.18663959999999',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode ===200) {
    console.log(body.currently.temperature);
  }
  else {
    console.log('Unable to fetch weather');
  }
});

//https://api.darksky.net/forecast/d874141aa8c46f2e028f983c8f6949a4/[latitude],[longitude]
//api key: d874141aa8c46f2e028f983c8f6949a4
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// 4a04d1c42fd9d32c97a2c291a32d5e2d
