import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {centerMap} from '../../actions/mapping-actions/mapping-action'
import RenderToLayer from 'material-ui/internal/RenderToLayer';

class SpotKiteShow extends Component {
    
    render (){
        const link= require('../../img/'+this.props.spot.imgURL) 
        return (
        <div className="row" style={{backgroundColor:'white',boxShadow: '0 6px 25px 0 rgba(38, 50, 56, 0.2)', marginLeft:0,marginRight:0, marginTop:15}} >
            <div className="col-sm-5" style={{paddingLeft:0,paddingRight:0, minHeight:'200px'}}>
               
                    <div
                    style={{width: '100%',
                        height: '100%',
                        backgroundImage:  `url(${link})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'}} >
                    </div>
                
            </div>
            <div className='col-sm-7 '>
                <div className="user-details">
                    <h4 className="" style={{marginTop:'10px',color:'#2a3134',textTransform:'uppercase'}}>{this.props.spot.name}</h4>
                    <p></p>
                    <p><span style={{color:'rgb(216, 61, 87)',fontWeight:'500'}}><i className="material-icons" style={{verticalAlign:'top', paddingRight:2}}>terrain</i>À savoir: </span>{this.props.spot.infoSpot}</p>
                    <p><span style={{color:'rgb(216, 61, 87)',fontWeight:'500'}}><i className="material-icons" style={{verticalAlign:'top', paddingRight:2}}>place</i>Localisation: </span>{this.props.spot.infoPosition}
                    <Link to="/pages/mapPage"><p style={{color:'rgb(150,150,150)', textDecoration:'underline'}}><span className={'align-top'}
                     onClick={()=>this.props.centerMap(this.props.spot.latitude,this.props.spot.longitude,13, this.props.spot.name)}>Voir carte</span></p></Link>
                    </p>
                    <p><span style={{color:'rgb(216, 61, 87)',fontWeight:'500'}}><i className="material-icons" style={{verticalAlign:'top', paddingRight:2}}>accessibility_new</i>Set-up: </span>{this.props.spot.infoLancement}</p>
                    <p><span style={{color:'rgb(216, 61, 87)',fontWeight:'700'}}><i className="material-icons" style={{verticalAlign:'top', paddingRight:2}}>warning</i>Attention!: </span>{this.props.spot.attention}</p>
                </div>
            </div>
        </div>
      )
    }
}
    function mapDispatchToProps(dispatch){
        return bindActionCreators({
          centerMap:centerMap,
        },
          dispatch)
      }
  
  export default connect(null,mapDispatchToProps)(SpotKiteShow)