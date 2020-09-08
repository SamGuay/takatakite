import React from 'react';

export const IconWeather = (props) => {
    // Used a style const for changing icon box
    // color using props.
    let nameProp=props.nameWeather
    let nameWi

    switch(nameProp){
        
        case 'clear-day':
            nameWi='wi wi-day-sunny'
            break;
        case 'clear-night':
            nameWi='wi wi-night-clear'
            break;
        case 'rain':
            nameWi='wi wi-rain'
            break;
        case 'snow':
            nameWi='wi wi-snow'
            break;
        case 'sleet':
            nameWi='wi wi-sleet'
            break;
        case 'wind':
            nameWi='wi wi-strong-wind'
            break;
        case 'fog':
            nameWi='wi wi-fog'
            break;
        case 'cloudy':
            nameWi='wi wi-cloud'
            break;
        case 'partly-cloudy-day':
            nameWi='wi wi-day-cloudy'
            break;
        case 'partly-cloudy-night':
            nameWi='wi wi-night-alt-cloudy'
            break;
        default: 
            nameWi='wi wi-na'
            break;
            
        }

    
    
    return (
      
      <i className={nameWi}></i>
      
      
    );
  }
  export default IconWeather