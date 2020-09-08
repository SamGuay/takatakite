export default function (state=[], action) {
    
    
    switch(action.type) {
        case 'CHANGE_PREFERENCE_DATE':
        return state= {
            date:action.date,
            hour:state.hour,
            active:action.active,
            activeHour:state.activeHour
        }
        case 'CHANGE_PREFERENCE_HOUR':
        return state= {
            date:state.date,
            hour:action.hour,
            active:state.active,
            activeHour:action.activeHour
        
        }
        default:
          return state;
      }
    
    }