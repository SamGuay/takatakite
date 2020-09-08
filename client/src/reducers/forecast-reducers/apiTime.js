
export default function (state=[], action) {
    
    
    switch(action.type) {
        case 'GET_API_TIME':
        return state= action.value
        case 'CHANGE_SELECTED_DATE':
            state.map((data,index)=>{
            if (action.index===index){
               return data.selected=true
            }
            else {
                return data.selected=false
            }
        })
        default:
          return state;
      }
    
    }