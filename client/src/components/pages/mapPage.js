import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapContainer from '../map/mapping'
import GetAPI from '../forecast/getAPI';
import SpotPreloading from '../map/spotPreloading';
import {changePreferenceHour,changePreferenceDate} from "../../actions/forecast-actions/apiTimeAction";
import {bindActionCreators} from 'redux';


class MappingPage extends Component{

 

  render () {
    //this.props.changePreferenceDate(this.props.apiTime[0].date,0)
    //this.props.changePreferenceHour(this.props.apiTime[0].hours[0],0)
    return (
      <div style={{}} >
        <GetAPI/>
        
        <SpotPreloading/>
        
       
        
      </div>
      

    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MappingPage);
