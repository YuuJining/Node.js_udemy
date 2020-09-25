const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Geocoding
//Address -> Lat/Long -> Weather
// const url = 'http://api.weatherstack.com/current?access_key=9e8d5698a19a64a75629cb8360bebb71&query=37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         //url input이 잘못 되었을 때
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like ' +response.body.current.feelslike + ' degrees out.')
//     }
// })


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

geocode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ' , data)
})