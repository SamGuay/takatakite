export default function windAngle(bearing) {
    if(bearing < 11.25 || bearing>348.75){ return 'N'}
    else if(bearing >=11.25 && bearing < 33.75 ){ return 'NNE'}
    else if(bearing >=11.25 && bearing < 56.25 ){ return 'NE'}
    else if(bearing >=11.25 && bearing < 78.75 ){ return 'ENE'}
    else if(bearing >=11.25 && bearing < 101.25 ){ return 'E'}
    else if(bearing >=11.25 && bearing < 123.75 ){ return 'ESE'}
    else if(bearing >=11.25 && bearing < 146.25 ){ return 'SE'}
    else if(bearing >=11.25 && bearing < 168.75 ){ return 'SSE'}
    else if(bearing >=11.25 && bearing < 191.25 ){ return 'S'}
    else if(bearing >=11.25 && bearing < 213.75 ){ return 'SSW'}
    else if(bearing >=11.25 && bearing < 236.25 ){ return 'SW'}
    else if(bearing >=11.25 && bearing < 258.75 ){ return 'WSW'}
    else if(bearing >=11.25 && bearing < 281.25 ){ return 'W'}
    else if(bearing >=11.25 && bearing < 303.75 ){ return 'WNW'}
    else if(bearing >=11.25 && bearing < 326.25 ){ return 'NW'}
    else if(bearing >=11.25 && bearing < 348.75 ){ return 'NNW'}
    
   }