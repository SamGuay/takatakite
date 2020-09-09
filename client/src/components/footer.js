import React from 'react';
import takata from '../img/takatalogo12copy1.png';

const Footer = () => (
  <footer className="" style={{marginTop:'60px'}}>
    <div style={{backgroundColor:'#00bbd6', position:'relative', height:'40px'}} >
    
    <div className='' style={{position:'absolute',top:'-60px'}}><img src={takata} style={{ maxWidth:'123px'  }}/></div>
    <div className=''style={{position:'absolute',top:'0px',left:'130px'}}><p style={{color:'white', marginBottom:'0', fontSize:'0.8rem'}}>Tout droits réservés © Takata Kite 2019</p></div>
  
    </div>
  </footer>
);

export default Footer;
