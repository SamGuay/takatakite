export default function starFunction(rideType,windType, windSpeed, windGust, onlyWind) {

 let stars;
 let wavyIndex=0;
 let minimumSpeed=12
 let goodSpeedBottom=16.5
 let goodSpeedTop=35
 let maximumSpeed=45
 let speedIndex=0
 let gustDifference=windGust-windSpeed
 
 if (windSpeed>maximumSpeed || windSpeed<minimumSpeed){
     speedIndex=0
 }
 else {
    if (windSpeed>goodSpeedBottom || windSpeed<goodSpeedTop){
        speedIndex=speedIndex+0.75
    }
    if (gustDifference<=5){
        speedIndex=speedIndex+0.25
    }
    else if (gustDifference<=11 && gustDifference>5){
        
    }
    else if (gustDifference<=15 && gustDifference>11){
        speedIndex=speedIndex-0.25
    }
    else if (gustDifference>12){
        speedIndex=0
    }
 }
 if (rideType==='mer'){
    switch(windType){
        case 'onShore':
            wavyIndex=0
            break;
        case 'sideOn':
            wavyIndex=0.5
            break;
        case 'side':
            wavyIndex=0.75
            break;
        case 'sideOff':
            wavyIndex=1
            break;
        case 'offShore':
            wavyIndex=0.5
            break;
        default:
            wavyIndex=0
            break;

    }

 }
if (rideType==='lagune'){
    switch(windType){
        case 'onShore':
            wavyIndex=0.25
            break;
        case 'sideOn':
            wavyIndex=0.5
            break;
        case 'side':
            wavyIndex=0.75
            break;
        case 'sideOff':
            wavyIndex=1
            break;
        case 'offShore':
            wavyIndex=1
            break;
        default:
            wavyIndex=0
            break;


    }

}
if (onlyWind.length!==0) {
    let onlyWindGood= false
    onlyWind.map(windOnly=>windOnly===windType?onlyWindGood=true:null)
    if (onlyWindGood) {
        wavyIndex=1.25
        speedIndex=speedIndex+0.25
       
    }
    else {
        wavyIndex=0
        speedIndex=speedIndex-0.25
    }
}

let averageIndex=((2/3)*speedIndex)+((1/3)*wavyIndex)
    if (averageIndex>=0.87){
        stars= 3
    }
    else if (averageIndex>=0.75 && averageIndex<0.87 ){
        stars= 2
    }
    else if (averageIndex>=0.5 && averageIndex<=0.75 ){
        stars= 1
    }
    else if (speedIndex<0.5){
        stars= 0
    }
    if (speedIndex===0 || wavyIndex===0){
        stars=0
    }
    
    return stars
}
