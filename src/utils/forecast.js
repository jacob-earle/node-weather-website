const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=bfe1797f1210db2f1b6ffff670cc961a&query=' + latitude + ',' + longitude + '&units=f'
	
	request({ url, json: true}, (error, {body}) => {
		if (error) {
			callback('Unable to connect to weather services.')
		} else if (body.error) {
			callback('Unable to find location!')
		} else {
			const currentWeather = body.current

			callback(undefined, currentWeather.weather_descriptions[0] + '. It is currently ' + currentWeather.temperature + ' degrees out. It feels like ' + currentWeather.feelslike + ' degrees out.')
		}
	})
}

module.exports = forecast