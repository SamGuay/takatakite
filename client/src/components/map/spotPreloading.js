import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapContainer from '../map/mapping'
import GetAPI from '../forecast/getAPI';
import SpotFilterForMap from '../forecast/spotFiltersForMap';
import {changePreferenceHour,changePreferenceDate} from "../../actions/forecast-actions/apiTimeAction";
import {bindActionCreators} from 'redux';

class SpotPreloading extends Component{
   constructor(){
       super()
       this.state={apiTimeLoaded:false}
   }



  render () {

   
    return (
      <div style={{ maxHeight: '60%', width: '100%' }} >
        <SpotFilterForMap/>
        <MapContainer />
      </div>)
    
   
    
  }
};

function mapStateToProps(state) {
  return {
    teams: state.teams,
    preferenceDateHour:state.preferenceDateHour,
    apiTime:state.apiTime
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      changePreferenceHour:changePreferenceHour,
      changePreferenceDate:changePreferenceDate,
  },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotPreloading);
