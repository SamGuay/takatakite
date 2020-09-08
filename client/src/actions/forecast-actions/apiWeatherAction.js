export  function loadedAPIWeather()  {
    return {
      type: 'LOADED_API_WEATHER',
      
    }
  }
  

 const getAPIWeatherType = 'GET_API_WEATHER';

function getAPIWeatherBefore(value) {
  return {
    type: getAPIWeatherType,
    value
    

  }
  
  
}

 
export function getAPIWeather(value) {
  return dispatch => {
    dispatch(getAPIWeatherBefore(value));
  
  };
}

