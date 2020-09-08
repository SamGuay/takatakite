import React from 'react';
import {Component} from 'react';
import IconStars from './iconStars'
import RotateArrow from './rotateArrow'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {centerMap} from '../../actions/mapping-actions/mapping-action'
import {changeIndexSpotInfo} from '../../actions/info-actions/infoSpotAction'

function handleIndex(islandName,spotName,islands){
    
    var indexIsland=islands.findIndex(islands=>{
        return islands.name===islandName
    })
    var indexSpot = islands[indexIsland].spot.findIndex(spots=>{
        return spots.name===spotName
    })
    return [indexIsland,indexSpot]
}

class SpotBar extends Component {
    
   
    render(){        
         return <div className='spot-bar' style={{marginTop:'10px'}} >
        <div className='row spot-bar-top d-flex justify-content-between'>
            <div ><p className="hiddenName">
    <span style={{maxWidth:'40px'}}>{this.props.spotName + ' '}</span><span style={{color:'rgb(230,230,230)',fontSize:'0.7em', maxWidth:'20%'}}>{this.props.islandName}</span></p></div>
            <div className='ranking'>
            <IconStars numberStars={this.props.star}/>
            </div>
        </div>
        
        <div className='row spot-bar-bottom'>
            <p><span className={'align-top'}><i className='material-icons'>waves</i>{this.props.waterDescription + ' - ' + this.props.type}
            
            </span></p>
            <p><RotateArrow angle={this.props.windBearing}/></p>
            <p className='windSpeedSpecs' style={{backgroundColor:this.props.windSpeedColor}}>{this.props.windSpeed} </p> 
            <p className='windSpeedSpecs' style={{backgroundColor:this.props.windGustColor}}>{this.props.windGust} </p>
            <p className='wind-specs align-middle'><i className='wi wi-strong-wind'></i>{this.props.windType + ' ' + this.props.windAngle} </p>
            
            
            
            <p><span className={'align-top'}><i className='material-icons'>zoom_out_map</i>{this.props.kiteSize + 'm²'}</span></p>
            <p><span className={'align-top'}><i className='material-icons'>assignment_ind</i>{this.props.spotLevel}</span></p>
            
            <Link to="/pages/mapPage"><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className={'align-top'} onClick={()=>this.props.centerMap(this.props.lat,this.props.lng,this.props.zoom, this.props.spotName)}><i className='material-icons'>location_on</i>Carte</span></p></Link>
            <Link to="/pages/spotKites#spotSection"><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className={'align-top'} 
            onClick={()=>
                {
                    var indexes= handleIndex(this.props.islandName,this.props.spotName,this.props.islands)
                    this.props.changeIndexSpotInfo(indexes[0],indexes[1])
                }
                }    
            >
                
                <i className='material-icons'>info</i>Info</span></p></Link>
               <a href={'https://www.google.com/maps/dir/?api=1&origin=Current%20Location&destination='+this.props.lat+','+this.props.lng}  ><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className='align-top' ><i className='material-icons' style={{paddingLeft:'3px'}}>directions</i>dir</span></p></a>
        </div>
        </div>
    }   
    }
    function mapDispatchToProps(dispatch){
        return bindActionCreators({
          centerMap:centerMap,
          changeIndexSpotInfo:changeIndexSpotInfo
            
        },
          dispatch)
      }
      function mapStateToProps(state) {
        return {
          islands: state.islands,
        }
      }
      
      
export default connect(mapStateToProps,mapDispatchToProps)(SpotBar);


