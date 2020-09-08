import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component} from 'react';
import React from 'react';
import IconStars from '../forecast/iconStars'
import {centerMap, zoomMap, closeSpot} from '../../actions/mapping-actions/mapping-action';
import {changeIndexSpotInfo} from '../../actions/info-actions/infoSpotAction';
import { Link } from 'react-router-dom';
import RotateArrow from '../forecast/rotateArrow'

function handleIndex(islandName,spotName,islands){
    
    var indexIsland=islands.findIndex(islands=>{
        return islands.name===islandName
    })
    var indexSpot = islands[indexIsland].spot.findIndex(spots=>{
        return spots.name===spotName
    })
    return [indexIsland,indexSpot]
  }
export class MapPoint extends Component {
    constructor(){
        super()
        this.state={spot:''}
    }
    componentWillMount(){
        this.setState({spot:this.props.mapping.spot})
    }
    componentDidUpdate(prevProps){
        if(this.props.mapping.spot!==prevProps.mapping.spot){
        this.setState({spot:this.props.mapping.spot})
        }


    }
    render(){
    if(this.state.spot==='' || this.state.spot!==this.props.spot){
        return <div className='preOpenMapPoint'>
            <div className='arrow-hero'>
                <RotateArrow angle={this.props.spotInfo.windBearing}/>
                <RotateArrow angle={this.props.spotInfo.windBearing}/>
                <RotateArrow angle={this.props.spotInfo.windBearing}/>
            </div>
            <div onClick={()=>this.props.centerMap(this.props.latitude, this.props.longitude, 13,this.props.spot)}         
                className={'text-center hero'}
                >

                    <IconStars numberStars={this.props.numberStars}/>
            </div>
         </div>
        }  
        else if(this.state.spot===this.props.spot) {
            return <div className='map-bar' >
            <div className='row map-bar-top d-flex justify-content-between'>
                <i onClick={()=>this.props.closeSpot()} className='material-icons' style={{color:'white', paddingTop:'1px', paddingLeft:'2px', backgroundColor:'rgba(0,0,0,0.15)', borderTopLeftRadius: '6px' }}>close</i>
                <div><p style={{
                        maxWidth:'127',
                        whiteSpace:'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'}}>
                        {this.props.spotInfo.spotName}
                        </p></div>
                <div className='ranking'>
                <IconStars numberStars={this.props.spotInfo.star}/>
                
                </div>
            </div>
            
            <div className='row map-bar-bottom'>
                
                <p><span className={'align-top'}><i className='material-icons'>waves</i>{this.props.spotInfo.waterDescription + ' - ' + this.props.spotInfo.type}
               <RotateArrow angle={this.props.spotInfo.windBearing}/>
                </span></p>
                
                <p className='wind-specs align-middle'><i className='wi wi-strong-wind'></i>{this.props.spotInfo.windType + ' ' + this.props.spotInfo.windAngle} </p>
                
                <p className='windSpeedSpecs' style={{backgroundColor:this.props.spotInfo.windSpeedColor}}>{this.props.spotInfo.windSpeed} </p> 
                <p className='windSpeedSpecs' style={{backgroundColor:this.props.spotInfo.windGustColor}}>{this.props.spotInfo.windGust} </p>
                
                <p><span className={'align-top'}><i className='material-icons'>zoom_out_map</i>{this.props.spotInfo.kiteSize + 'm²'}</span></p>
                <p><span className={'align-top'}><i className='material-icons'>assignment_ind</i>{this.props.spotInfo.spotLevel}</span></p>
                
                <Link to="/pages/spotKites#spotSection"><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className={'align-top'} 
                 onClick={()=>
                {
                    var indexes= handleIndex(this.props.spotInfo.islandName,this.props.spotInfo.spotName,this.props.islands)
                    this.props.changeIndexSpotInfo(indexes[0],indexes[1])
                }
                }    
            >
                
                <i className='material-icons'>info</i>Info</span></p></Link>
                <a href={'https://www.google.com/maps/dir/?api=1&origin=Current%20Location&destination='+this.props.spotInfo.latitude+','+this.props.spotInfo.longitude}  target="_blank"><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className='align-top' ><i className='material-icons' style={{paddingLeft:'3px'}}>directions</i>dir</span></p></a>
            </div>
            </div>
        } 
        
        
        else {
            return null
        } 
}

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        centerMap:centerMap,
        zoomMap:zoomMap,
        closeSpot:closeSpot,
        changeIndexSpotInfo:changeIndexSpotInfo,
    },
      dispatch)
  }
  
  function mapStateToProps(state) {
    return {
      spotBar:state.spotBar,
      mapping:state.map,
      islands:state.islands
  
      
  
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(MapPoint)