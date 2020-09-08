export default function (state={indexIsland:0,indexSpot:0}, action) {
    switch(action.type) {
      case 'CHANGE_INDEX':
        return state={
            indexIsland:action.indexIsland,
            indexSpot:action.indexSpot
        };
  
      default:
        return state;
    }
  
  }
  