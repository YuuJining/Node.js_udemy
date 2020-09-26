const request = require('request')

const forecast = (latitude, longtitude, callback)=> {
    const url = 'http://api.weatherstack.com/current?access_key=9e8d5698a19a64a75629cb8360bebb71&query='+ latitude+ ',' +longtitude

    request({url: url, json: true}, (error, response)=> {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, 
                response.body.current.weather_descriptions[0]+' throughout the day. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+' degrees out.'
                // description: response.body.current.weather_descriptions[0],
                // temperature: response.body.current.temperature,
                // feelslike: response.body.current.feelslike
            )
        }
    })
}

module.exports = forecast