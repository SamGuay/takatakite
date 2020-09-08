import React from 'react';
import DarkSkyApi from 'dark-sky-api';
import {getCurrentWeather} from "../../actions/forecast-actions/currentWeatherAction";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component} from 'react';

DarkSkyApi.apiKey = '51d797abd0d87e09dc193ba57ee7f9af';
DarkSkyApi.units = 'ca'; // default 'us'
DarkSkyApi.language = 'fr'; // default 'en
DarkSkyApi.extendHourly(true);
const position = {
    latitude: 47.3777, 
    longitude: -61.8714
  };



class Importing extends Component {
     componentDidMount(){
     
      if (!this.props.currentWeather.loaded  )
      {
        DarkSkyApi.loadItAll('minutely,flags,alert',position)
        .then(result => 
         { 
          this.props.getCurrentWeather(result);
        }
          
        )
      }
      
      

     
    }
  
    render ()

     { return <div>
        
       
      </div>}
    
  ;
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather,
    
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getCurrentWeather:getCurrentWeather},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Importing);