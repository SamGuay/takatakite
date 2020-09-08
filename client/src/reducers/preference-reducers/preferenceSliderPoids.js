function convertLbs(value) {
    return Math.round(value*2.2046)
} 

export default function (state={
    sliderValue:70,
    sliderLbs:convertLbs(70)
  }, action) {
    
    
    switch(action.type) {
        case 'PREFERENCE_SLIDER_POIDS':
        
        return state= {sliderValue: action.value,
                        sliderLbs:convertLbs(action.value)
        }
  
        default:
          return state;
      }
    
    }