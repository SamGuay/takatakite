import React, {Component} from 'react';
import imageUrl from '../../img/gaia.jpg';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className='row ' style={style}>
          <div className="overlay"></div>
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)', textAlign:'center'}}>CONTACT</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="inner-box-title full">Coordonnées</h4>
            <div className="an-address-single">
              <p><i className="fa fa-phone"></i>(+1) 418-564-0523</p>
              <p><i className="fa fa-envelope"></i><a href={'mailto:takatakites@gmail.com'}>takatakites@gmail.com</a></p>
              <p><i className="fa fa-user"></i>Alexandre Grenier<br/><span style={{fontStyle:'oblique', color:'grey'}}>Fondateur et Concepteur</span></p>
            </div>
          </div>
          <div className="col-md-6 contact-form">
            <h4 className="inner-box-title full">Envoyez-nous un message</h4>
            <p>Suggestion, demande pour ajouter votre école, votre spot préféré etc..</p>
         
        </div>
      </div>
      </div>
    );
  }
}

export default ContactUs;
