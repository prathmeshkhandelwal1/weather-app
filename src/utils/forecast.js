const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1eedc6db67bda0a14c8e63ab5c7693b8&query='+latitude+','+longitude+'&units=m'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect',undefined)
        }else if(response.body.error){
            callback('unable to find',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+'. There is ' + response.body.current.temperature + " degree out there But is feels like " + response.body.current.feelslike)
        }
    })
}

module.exports= forecast