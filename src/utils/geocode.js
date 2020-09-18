const request = require('request')
const geocode=(address, callback)=>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidmlzaG5pLXNvYnRpIiwiYSI6ImNrNHZvc3hkMjBvdWgza24xcHk4Njd5am8ifQ.qs8z03SBiK7lLHD6WM7ExA"
    request({url:url, json:true},(err,res)=>{
        if(err)
        {
            callback('Unable to connect...', undefined)
        }
        else
        {
            if(res.body.features.length===0)
            {
                callback('Missing/Incorrect info...', undefined)
            }
            else
            {
                callback(undefined,{
                  latitude: res.body.features[0].center[1],
                  longitude : res.body.features[0].center[0],
                  location: res.body.features[0].place_name
                })  
            }
        }
    })
}
module.exports= geocode