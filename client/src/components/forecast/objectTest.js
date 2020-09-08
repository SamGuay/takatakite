var property='Test'
var productJson = [
  {id:'Vent',
  [property]:'prop'
}
]
  


var windSpeed = Object.assign({},...allImport.hourly.data.map((data)=>(
  {
      [data.time]:Math.round(data.windSpeed)
  })))
var windGust = Object.assign({},...allImport.hourly.data.map((data)=>(
      {
          [data.time]:Math.round(data.windGust)
      })))
var windBearing = Object.assign({},...allImport.hourly.data.map((data)=>(
  {
      [data.time]:Math.round(data.windGust)
  })))


var products = [{id:'wind',...windSpeed
  
}]
