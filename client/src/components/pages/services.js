import React, {Component} from 'react';
import {connect} from 'react-redux';
import imageUrl from '../../img/banner.jpg';
import {bindActionCreators} from 'redux';
import {ecoleList} from '../services/ecoleList'

const style = {
  backgroundImage: 'url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  paddingTop:'60px',
  paddingBottom:'60px',
  marginLeft:'-15px',
  marginRight:'-15px',
  marginBottom:'15px',
  

}
const iconStyle ={
  verticalAlign:'center',
  paddingRight:2, 
  fontSize: '1rem',
  color:'rgb(216, 61, 87)',
  paddingBottom:0,
}
const iconStyleSmall ={
  verticalAlign:'center',
  fontSize: '1rem',
  color:'white',
  paddingBottom:0,
}

class Services extends Component {
  serviceLoop (ecoleList) {
    
    return ecoleList.map((ecole,index) => {
      const link= require('../../img/'+ecole.imgURL) 
      return (
        <div className="col-sm-6" key={index}>
          <div className="an-service-single">
            <div style={{width:'120px',height:'120px', margin:'auto'}}>
            <img src={link} style={{border: '3px solid rgb(216, 61, 87)',borderRadius: '50%', width:'100%', height:'100%', boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'}}/>
            </div>
            <h4>{ecole.name}</h4>
              <div style={{display:'inline', textAlign:'left'}}>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}><i className="material-icons" style={iconStyle}>assignment_ind</i>Instructeur: </span>{ecole.headInstructor}</p>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>phone</i>Téléphone: </span><a href={'tel:'+ecole.phoneNumber}>{ecole.phoneNumber}</a></p>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>place</i>Adresse: </span><a href={ecole.addressURL}>{ecole.address}</a></p>
                <p style={{lineHeight:'1.5', fontSize:'0.8rem'}}><span style={{color:'rgb(0,94,184)',fontWeight:'500', lineHeight:'1.5'}}> Centre IKO : </span>{ecole.ikoAffiliated?'Oui':'Non'}</p>
                <p style={{lineHeight:'1.5', fontSize:'0.8rem'}}><span style={{color:'rgb(0,94,184)',fontWeight:'500', lineHeight:'1.5'}}> Instruteurs IKO: </span>{ecole.ikoInstructors?'Oui':'Non'}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1.5'}}> Marque de kite: </span>{ecole.equipmentBrand}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1.5'}}> Location d'équipement: </span>{ecole.location?'Oui':'Non'}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1.5'}}> Autres Services: </span>{ecole.otherService}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1.5'}}> Email: </span><a href={'mailto:'+ecole.email}>{ecole.email}</a></p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1.5'}}> Website: </span><a href={ecole.website}>{ecole.website}</a></p>
                <div style={{backgroundColor:'rgb(0, 187, 214)', borderRadius:'5px'}}>
                <ul className="small-social">
                 { ecole.facebook!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={ecole.facebook}><i className="fa fa-facebook" style={iconStyleSmall}></i></a></li>:null}
                 { ecole.instagram!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={ecole.instagram}><i className="fa fa-instagram" style={iconStyleSmall}></i></a></li>:null}
                </ul>
                </div>
              </div>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        <div className='row ' style={style}>
          <div className="overlay"></div>
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)'}}>ÉCOLES DE KITES</h1>
        </div>
        <div className="row">
          {this.serviceLoop(ecoleList)}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    services: state.services
  }
}

export default connect(mapStateToProps)(Services);
