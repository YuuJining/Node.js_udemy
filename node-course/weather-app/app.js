const request = require('request')

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

//Geocoding
//Address -> Lat/Long -> Weather

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoieXVqaW5sZWUxIiwiYSI6ImNrZmR5M2xnczBiNXUyeXFxYmpodDAxaXAifQ.9FoAYtr0ApcUO9HhGF05IQ'

request({url: geoURL, json: true }, (error, response)=>{
    if(error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
    const longtitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    
    console.log(longtitude,latitude)
    }
})  