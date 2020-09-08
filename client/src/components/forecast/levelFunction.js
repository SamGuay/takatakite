export default function levelFunction(rideType,profond,windType){
   let level='Avancé'
    if (!profond){
        switch(windType){
            case 'onShore':
                level='Débutant'
                break;
            case 'sideOn':
                level='Débutant'
                break;
            case 'side':
                level='Débutant'
                break;
            case 'sideOff':
                level='Intermédiaire'
                break;
            case 'offShore':
                level='Avancé'
                break;
            default :
                level='Avancé'
    }
}
    else {
    
    if (rideType==='mer'){
        switch(windType){
            case 'onShore':
                level='Avancé'
                break;
            case 'sideOn':
                level='Intermédiaire'
                break;
            case 'side':
                level='Intermédiaire'
                break;
            case 'sideOff':
                level='Avancé'
                break;
            case 'offShore':
                level='Avancé'
                break;
            default:
                level='Avancé'
                break;
    
        }
    
     }
    if (rideType==='lagune'){
        switch(windType){
            case 'onShore':
             level='Intermédiaire'
                break;
            case 'sideOn':
            level='Intermédiaire'
                break;
            case 'side':
            level='Intermédiaire'
                break;
            case 'sideOff':
            level='Intermédiaire'
                break;
            case 'offShore':
            level='Avancé'
                break;
            default:
            level='Avancé'
                break;
    
    
        }
    
    }
}
return level
}