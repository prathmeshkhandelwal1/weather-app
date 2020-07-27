const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicHJhdGhtZXNoa2hhbmRlbHdhbCIsImEiOiJja2N4Zm81cm0wbmR6MnNzMXQzYjRuZzV1In0.6Lee5OxXVtF-GXwiXU4NSg&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(!response.body.features.length){
            callback('Unable to find',undefined)
        }else{
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            // console.log(response.body.features[0].place_name)
            callback(undefined,{latitude:latitude,longitude:longitude,location:response.body.features[0].place_name})
        }
        
    })
}

module.exports = geocode