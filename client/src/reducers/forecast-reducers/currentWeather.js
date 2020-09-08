
export default function (state={
    loaded:false,
    temperature:0,
    windBearing:0,
    windDirection:0,
    icon:[],
    wind:0,
    windGust:0,
    summary:[],
    apparentTemperature:0,
    precipProbability:0,

  }, action) {
    
    
    switch(action.type) {
        case 'GET_CURRENT_WEATHER':
        
        
        return state= {
            loaded:true, 
            temperature:Math.round(action.value.currently.temperature),
            tempDescription:action.value.currently.summary,
            windBearing:action.value.currently.windBearing,
            windDirection:action.value.currently.windDirection,
            icon:action.value.currently.icon,
            wind:Math.round(action.value.currently.windSpeed*0.539957),
            windGust:Math.round(action.value.currently.windGust*0.539957),
            summary:action.value.currently.summary,
            apparentTemperature:Math.round(action.value.currently.apparentTemperature),
            precipProbability:Math.round(action.value.currently.precipProbability*100),
            hourly:action.value
          }
  
        default:
          return state;
      }
    
    }