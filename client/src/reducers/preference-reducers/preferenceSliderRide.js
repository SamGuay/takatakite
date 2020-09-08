function typeRide(value) {switch(value) {
    case 0 :
        return 'Tous'
    case 50 :
       return 'lagune'
    case 100 :
       return 'mer'
    default:
       return 'Tous'
} }

export default function (state={
    sliderValue:0,
    sliderName:'Tous'
  }, action) {
    
    
    switch(action.type) {
        case 'PREFERENCE_SLIDER_RIDE':
           
        
        return state= {sliderValue: action.value,
                        sliderName:typeRide(action.value)
        }
  
        default:
          return state;
      }
    
    }