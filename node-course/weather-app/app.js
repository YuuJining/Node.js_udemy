const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=9e8d5698a19a64a75629cb8360bebb71&query=37.8267,-122.4233'

const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los_angeles.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoieXVqaW5sZWUxIiwiYSI6ImNrZmR5M2xnczBiNXUyeXFxYmpodDAxaXAifQ.9FoAYtr0ApcUO9HhGF05IQ'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like ' +response.body.current.feelslike + ' degrees out.')
// })

request({url: geourl, json: true }, (error, response)=>{
    const longtitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    
    console.log(longtitude,latitude)
})  