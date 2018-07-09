const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
  a: {
    demand: true,
    alias: `address`,
    describe: `Address to fetch weather for`,
    string: true
  }
})
  .help()
  .alias(`help`, `h`)
  .argv; //stores it in argv variable

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
//  console.log(JSON.stringify(response, undefined, 2)); //var, undefined because doesnt matter, number of spaces
console.log(`Address: ${body.results[0].formatted_address}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
});
