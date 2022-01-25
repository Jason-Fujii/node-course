//HTTP request for Alcatraz, CA
//http://api.weatherstack.com/current?access_key=adacb59dc4833fa80fef8a67206b2170&query=37.8267,-122.4233

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'http://api.weatherstack.com/current?access_key=adacb59dc4833fa80fef8a67206b2170&query=37.8267,-122.4233&units=f'
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamZ1amlpIiwiYSI6ImNreWY2YWNkaTA4OW0ybm82MXk2dXUycmEifQ.4onBZIGXyl8_83uz5rbZTQ&limit=1'

const location = process.argv[2]

if(!location){
    console.log('Please provice a location')
} else {
    geocode(location, (error, data) => {
        if(error){
            return console.log(error)
        }

        const {latitude, longitude, location} = data
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
          })
    })
}

//Geocoding
//Taking an address and coverting that to a lat/lon pair
//Address -> Lat/Long -> Weather