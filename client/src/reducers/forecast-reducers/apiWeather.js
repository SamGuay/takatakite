const eventExists = (events, event) => {
    return events.some((e) => e.spot === event.spot);
  }
export default function (state={
    loaded:false,
    island: [{
    island: '',
    spot:'',
    data: [
                    {
                            spotName:'',
                            islandName:'',
                            latitude:0,
                            longitude:0,
                            time:0,
                            timeConverted:'',
                            dayNo:'',
                            summary:'',
                            windBearing:0,
                            windSpeed:0,
                            windGust:0,
                            icon:'',
                            apparentTemperature:0,
                            temperature:0,
                            precipProbability: 0,
                            type:'',
                            windAngle:0,
                            windType:'',
                            windSpeedColor: '#fff',
                            windGustColor:'#fff',
                            star: 0,
                            waterDescription:'',
                            kiteSize: 0,
                            spotLevel:'',
                    }
                ]}]

                
            }, action) {
    
    
    switch(action.type) {
        case 'GET_API_WEATHER':
        if (eventExists(state.island,action.value)){
            return state
        }
        else{
        return  state = {
            ...state, island:[...state.island,action.value]
                
        }}   
            
            
          
        
        
        case 'LOADED_API_WEATHER':
            return state = {
                ...state,loaded:true
            }
            
            
        default:
          return state;
      }
    
    }