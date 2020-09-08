import React, {Component} from 'react';
import {connect} from 'react-redux';
import SpotBar from './spotBar'


class SpotBarShow extends Component {


    render(){
        return <div >
        {   
            
            this.props.spotBar.map((data,index)=>{
          
            return<SpotBar 
            key={index}
            star={data.star} 
            spotName={data.spotName}
            islandName={data.islandName}  
            waterDescription={data.waterDescription} 
            type={data.type} 
            windType={data.windType}
            windAngle={data.windAngle}
            windBearing={data.windBearing}
            windSpeedColor={data.windSpeedColor}
            windGustColor={data.windGustColor}
            windSpeed={data.windSpeed}
            windGust={data.windGust}
            kiteSize={data.kiteSize}
            spotLevel={data.spotLevel}
            lat={data.latitude}
            lng={data.longitude}
            zoom={13}
        

/>})}
       </div>
    }
}


function mapStateToProps(state) {
    return {
      spotBar:state.spotBar,
   
  
    }
  }

  export default connect(mapStateToProps)(SpotBarShow);