export default function windTypeFunction(windBearing,SpotOffShorePointing){
    let differenceOrientation = Math.abs(windBearing-SpotOffShorePointing)
    if (differenceOrientation<=11.75 || differenceOrientation>348.25){
        return 'onShore'
    }
    else if(differenceOrientation<=78.25 && differenceOrientation>11.75) {
        return 'sideOn'
    }
    else if(differenceOrientation<=101.75 && differenceOrientation>78.25) {
        return 'side'
    }
    else if(differenceOrientation<=168.25 && differenceOrientation>101.75) {
        return 'sideOff'
    }
    else if(differenceOrientation<=190.75 && differenceOrientation>168.25) {
        return 'offShore'
    }
    else if(differenceOrientation<=258.25 && differenceOrientation>190.75) {
        return 'sideOff'
    }
    else if(differenceOrientation<=280.75 && differenceOrientation>258.25) {
        return 'side'
    }
    else if(differenceOrientation<=348.25 && differenceOrientation>280.75) {
        return 'sideOn'
    }
}