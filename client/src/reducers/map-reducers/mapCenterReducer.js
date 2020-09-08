export default function (state={
    lat:47.4277,
    lng:-61.7812,
    zoom:10,
    spot:'',

}, action) {
    switch(action.type) {
      case 'CENTER_MAP':
        return state={
            lat:action.lat,
            lng:action.lng,
            zoom:action.zoom,
            spot:action.spot,
        };
        case 'ZOOM_MAP':
        return state={
            lat:state.lat,
            lng:state.lng,
            zoom:action.zoom,
            spot:state.spot,
        };
        case 'CLEAR_SPOT':
        return state={
            lat:state.lat,
            lng:state.lng,
            zoom:state.zoom,
            spot:'',

        };
        case 'INITIALIZE_SPOT':
        return state={
            lat:47.4277,
            lng:-61.7812,
            zoom:10,
            spot:'',

        };
        case 'CLOSE_SPOT':
        return state={
            lat:state.lat,
            lng:state.lng,
            zoom:12,
            spot:'',

        };
  
      default:
        return state;
    }
  
  }
  