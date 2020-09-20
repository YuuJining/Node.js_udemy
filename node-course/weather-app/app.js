const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=9e8d5698a19a64a75629cb8360bebb71&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0]+' It is currently '+response.body.current.temperature+' degrees out. It feels like ' +response.body.current.feelslike + ' degrees out.')
})