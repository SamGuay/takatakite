import React, {Component} from 'react';
import imageUrl from '../../img/brokensurfboards.jpg';
import {equipementList} from '../services/equipementList'

const style = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('+ imageUrl + ')',
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

class Equipement extends Component {
  serviceLoop (equipementList) {
    
    return equipementList.map((equipement,index) => {
      const link= require('../../img/'+equipement.imgURL) 
      return (
        <div className="col-lg-4 col-sm-6" key={index}>
          
            <div style={{minHeight:'150px',width:'100%', margin:0}}>
            <div
                    style={{width: '100%',
                        height: '100%',
                        minHeight:'150px',
                        backgroundImage:  `url(${link})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        boxShadow: '0 6px 25px 0 rgba(38, 50, 56, 0.2)'
                      
                      }}
                        
                        >
            
            </div>
            </div>
            <div className="an-service-single">
            <h4 style={{paddingBottom:3}}>{equipement.name}</h4>
              <p style={{lineHeight:'1',fontStyle:'oblique'}}>{equipement.description}</p>
            <div style={{display:'inline', textAlign:'left'}}>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>phone</i>Téléphone: </span><a href={'tel:'+equipement.phoneNumber}>{equipement.phoneNumber}</a></p>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>place</i>Adresse: </span><a href={equipement.addressURL}>{equipement.address}</a></p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Marque disponible: </span>{equipement.equipmentBrand}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Réparation d'équipement: </span>{equipement.reparation?'Oui':'Non'}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Autres Équipement: </span>{equipement.otherEquipment}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Email: </span><a href={'mailto:'+equipement.email}>{equipement.email}</a></p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Website: </span><a href={equipement.website}>{equipement.website}</a></p>
                <div style={{backgroundColor:'rgb(0, 187, 214)', borderRadius:'5px'}}>
                <ul className="small-social">
                 { equipement.facebook!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={equipement.facebook}><i className="fa fa-facebook" style={iconStyleSmall}></i></a></li>:null}
                 { equipement.instagram!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={equipement.instagram}><i className="fa fa-instagram" style={iconStyleSmall}></i></a></li>:null}
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
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)', textAlign:'center'}}>ÉQUIPEMENT ET RÉPARATION</h1>
        </div>
        <div className="row">
          {this.serviceLoop(equipementList)}
        </div>
      </div>
    );
  }
}



export default (Equipement);
