const request = require('request');
const geocode = require('./utils/geocode');

// const url =
//   'http://api.weatherstack.com/current?access_key=325d5f8462a2e853d9ba2d344336725f&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degrees out. It feels like ' +
//         response.body.current.feelslike +
//         ' degrees out.'
//     );
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWVycmFwcmFnYWRhYWdhc3RoeWEiLCJhIjoiY2xrOHE1bGx2MDNtMzNtbG5majB4cno2dyJ9.RusH12s-YCm0B8Gi_z9Uvg&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services!');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.');
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
