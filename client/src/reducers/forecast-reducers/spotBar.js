
export default function (state=[{
                            spotName:'',
                            island:'',
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
                    }], action) {
    
    
        switch(action.type) {

          case 'LOAD_SPOT_BAR':
         
          return state= action.value
          

          case 'CLEAR_SPOT_BAR':
          return state=[{
            spotName:'',
            island:'',
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
    }]
          
          default:
            return state;
        }

    }