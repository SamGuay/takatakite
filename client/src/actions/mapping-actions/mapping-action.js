export const centerMap = (lat,lng,zoom,spot) => {
    return{
      type:'CENTER_MAP',
      lat, lng, zoom,spot
    }
  }
  export const zoomMap = (zoom) => {
    return{
      type:'ZOOM_MAP',
       zoom
    }
  }
  export const clearSpot = () => {
    return{
      type:'CLEAR_SPOT',
       
    }
  }
  export const initializeSpot = () => {
    return{
      type:'INITIALIZE_SPOT',
       
    }
  }
  export const closeSpot = () => {
    return{
      type:'CLOSE_SPOT',
       
    }
  }