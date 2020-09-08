function windType(value) {switch(value) {
    case 0 :
        return 'Tous'
    case 20 :
       return 'sideOn'
    case 40 :
       return 'onShore'
    case 60 :
       return 'sideOff'
    case 80 :
       return 'offShore'
    case 100 :
       return 'side'
      default:
       return 'Tous'
} }

export default function (state={
    sliderValue:0,
    sliderName:'Tous'
  }, action) {
    
    
    switch(action.type) {
        case 'PREFERENCE_SLIDER_WIND':
          
        
        return state= {sliderValue: action.value,
                        sliderName:windType(action.value)
        }
  
        default:
          return state;
      }
    
    }