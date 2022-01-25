const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=adacb59dc4833fa80fef8a67206b2170&query=' + lat + ',' + long +'&units=f'

    request({url, json: true}, (error, response) => {
        const {body} = response

        if(error){
            callback('Unable to connect to weather services', undefined)
        } else if(body.error){
            callback('Unable to to find that location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temperature is currently ' + body.current.temperature + ' degrees, but it feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

//console.log(response.body.current.weather_descriptions[0] + '. The temperature is currently ' + response.body.current.temperature + ' degrees, but it feels like ' + response.body.current.feelslike + ' degrees out.')

module.exports = forecast