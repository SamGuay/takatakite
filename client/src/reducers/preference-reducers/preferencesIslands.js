

export default function (state={
  toggleBox:[]
}, action) {
  
  
  switch(action.type) {
      case 'PREFERENCE_ISLAND_INITIAL':
        return Object.assign({}, state, {
          toggleBox: [
            ...state.toggleBox,
            {
              name: action.nameIsland,
              toggled: true
            }
          ]
        })
      case 'PREFERENCE_ISLAND_SWITCH':
      return Object.assign({}, state, {
        toggleBox: state.toggleBox.map((toggle,index)=>{
          if (index===action.index) {
            return Object.assign({}, toggle, {
              name: action.nameIsland,
              toggled: !toggle.toggled
            })
          }
          return toggle
          }
          )
        })

      default:
        return state;
    }
  
  }