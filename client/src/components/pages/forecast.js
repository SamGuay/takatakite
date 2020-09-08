import React, {Component} from 'react';
import {connect} from 'react-redux';
import CurrenWeather from '../forecast/currentWeather';
import Importing from '../forecast/importing';
import GetAPI from '../forecast/getAPI';
import CurrentTable from '../forecast/currentTable';
import SpotFilter from '../forecast/spotFilters'
import SpotBarShow from '../forecast/spotBarShow'
import SliderDateTime from '../preference-components/sliderDateTime';
import { Link } from 'react-router-dom';


class Forecast extends Component{
  componentWillMount(){
    
  }
 
  render () {
    return (
      <div>
        
        <CurrenWeather />
        <Importing />
        <GetAPI />
        <div style={{marginTop:5}}>
        <CurrentTable/>
        </div>
        <div style={{marginTop:30}}>
        <div>
          <div><h4 style={{marginBottom:'0px'}}>MEILLEURS SPOT  </h4></div>
          <div  style={{textAlign:'right'}}> <Link to='/pages/mapPage'><span ><span className="material-icons" style={{color:'rgb(216, 61, 87)', verticalAlign:'bottom'}}>place</span><span style={{textDecoration:'underline', color:'rgb(150,150,150)'}}>Map</span></span></Link></div>
        </div>
        <SliderDateTime />
        <SpotFilter/>
        <SpotBarShow />
        </div>
       
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    teams: state.teams

  }
}

export default connect(mapStateToProps)(Forecast);
