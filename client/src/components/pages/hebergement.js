import React, {Component} from 'react';
import imageUrl from '../../img/1O3A9980.jpg';
import {hebergementList} from '../services/hebergementList'

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

class Herbergement extends Component {
  serviceLoop (hebergementList) {
    
    return hebergementList.map((herbergement,index) => {
      const link= require('../../img/'+herbergement.imgURL) 
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
            <h4 style={{paddingBottom:3}}>{herbergement.name}</h4>
              <p style={{lineHeight:'1',fontStyle:'oblique'}}>{herbergement.description}</p>
            <div style={{display:'inline', textAlign:'left'}}>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>phone</i>Téléphone: </span><a href={'tel:'+herbergement.phoneNumber}>{herbergement.phoneNumber}</a></p>
                <p style={{lineHeight:'1'}}><span style={{color:'rgb(216, 61, 87)',fontWeight:'500', lineHeight:'1'}}> <i className="material-icons" style={iconStyle}>place</i>Adresse: </span><a href={herbergement.addressURL}>{herbergement.address}</a></p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Chambre disponible: </span>{herbergement.rooms}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Espace rangement kite: </span>{herbergement.locker?'Oui':'Non'}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Tranche de prix: </span>{herbergement.price}</p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Email: </span><a href={'mailto:'+herbergement.email}>{herbergement.email}</a></p>
                <p style={{lineHeight:'1.5',fontSize:'0.8rem'}}><span style={{color:'rgb(50, 50, 50)',fontWeight:'500', lineHeight:'1.5'}}> Website: </span><a href={herbergement.website}>{herbergement.website}</a></p>
                <div style={{backgroundColor:'rgb(0, 187, 214)', borderRadius:'5px'}}>
                <ul className="small-social">
                 { herbergement.facebook!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={herbergement.facebook}><i className="fa fa-facebook" style={iconStyleSmall}></i></a></li>:null}
                 { herbergement.instagram!==''?<li style={{paddingTop:0, paddingBottom:0}}><a href={herbergement.instagram}><i className="fa fa-instagram" style={iconStyleSmall}></i></a></li>:null}
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
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)'}}>HÉBERGEMENT</h1>
        </div>
        <div className="row">
          {this.serviceLoop(hebergementList)}
        </div>
      </div>
    );
  }
}



export default (Herbergement);
