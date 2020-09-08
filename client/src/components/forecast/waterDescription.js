export default function waterDescription(type,typeOfWind){
    switch(type){
        case 'lagune':
            switch(typeOfWind){
                case 'onShore':
                    return 'Choppy' 
                    break;
                case 'sideOn':
                    return 'Chops'
                    break;
                case 'side':
                    return 'Clean'
                    break;
                case 'sideOff':
                    return 'Flat'
                    break;
                case 'offShore':
                    return 'Flat'
                    break;
                default:
                    return 'N/A'
                    break;
                

            }

        case 'mer':
        switch(typeOfWind){
            case 'onShore':
                return 'Choppy'
                break;
            case 'sideOn':
                return 'Whitecaps'
                break;
            case 'side':
                return 'Whitecaps'
                break;
            case 'sideOff':
                return 'Clean'
                break;
            case 'offShore':
                return 'Clean'
                break;
            default:
                return 'N/A'
                break;
        }
        default:
        return 'N/A'
    }

}