const request = require('request')

const forecast = (latitude, longtitude, callback)=> {
    const url = 'http://api.weatherstack.com/current?access_key=9e8d5698a19a64a75629cb8360bebb71&query='+ latitude+ ',' +longtitude

    request({url, json: true}, (error, { body })=> {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0]+' throughout the day. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.'
                // description: response.body.current.weather_descriptions[0],
                // temperature: response.body.current.temperature,
                // feelslike: response.body.current.feelslike
            )
        }
    })
}

module.exports = forecast