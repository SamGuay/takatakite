function levelRide(value) {switch(value) {
    case 0 :
        return 'Débutant'
    case 50 :
       return 'Intermédiaire'
    case 100 :
       return 'Avancé'
    default:
        return 'Avancé'
} }

export default function (state={
    sliderValue:100,
    sliderName:'Avancé'
  }, action) {
    
    
    switch(action.type) {
        case 'PREFERENCE_SLIDER_LEVEL':
          
        
        return state= {sliderValue: action.value,
                        sliderName:levelRide(action.value)
        }
  
        default:
          return state;
      }
    
    }