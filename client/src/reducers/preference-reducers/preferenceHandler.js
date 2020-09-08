import {combineReducers} from 'redux';
import preferenceIslands from '../preference-reducers/preferencesIslands'
import preferenceSliderRide from '../preference-reducers/preferenceSliderRide'
import preferenceSliderLevel from '../preference-reducers/preferenceSliderLevel'
import preferenceSliderPoids from '../preference-reducers/preferenceSliderPoids'
import preferenceSliderWind from '../preference-reducers/preferenceSliderWind'


const preferenceHandler = combineReducers({
    preferenceIslands:preferenceIslands,
    preferenceSliderRide:preferenceSliderRide,
    preferenceSliderLevel:preferenceSliderLevel,
    preferenceSliderPoids:preferenceSliderPoids,
    preferenceSliderWind:preferenceSliderWind,
    

})

export default preferenceHandler;