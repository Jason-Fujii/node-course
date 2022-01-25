const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamZ1amlpIiwiYSI6ImNreWY2YWNkaTA4OW0ybm82MXk2dXUycmEifQ.4onBZIGXyl8_83uz5rbZTQ&limit=1'

    request({ url, json: true }, (error, response) => {
        const {body} = response

        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(!body.features) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode