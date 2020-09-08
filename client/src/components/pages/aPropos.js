import React, {Component} from 'react';
import imageUrl from '../../img/aprr.jpg';
import ikorow from '../../img/poweredby-oneline.png';
import takata from '../../img/takatalogo12.png'

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



class Apropos extends Component {
  

  render () {
    return (
      <div >
        <div className='row ' style={style}>
          <div className="overlay"></div>
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)',textAlign:'center'}}> À PROPOS</h1>
        </div>
        <div className="row container">
        <div style={{margin:'auto', textAlign:'center'}}>
          <img src={takata} style={{width:'100%', maxWidth:'300px'}}/>
          </div>
        <div className="about-box-single">
          <h4 className="inner-box-title"> Takata kite</h4>
          <p>Takata Kite est une application Web de forecast conçu pour les Kiteurs par des Kiteurs. Le but est d'offrir des prédictions adaptés aux différents Spot et de faire découvrir
             les spot de kites à travers le monde. Mais Takata Kite ne se limite pas là,Takata Kites encourage et mets aussi de l'avant les entreprise oeuvrant de prêt ou de loin dans le domaine du kite. (N'hésitez pas à nous contacter pour qu'on ajoute votre entreprise)
             Chaques spot à ses particularité et Takata Kite veut vous les faire découvrir un spot à la fois! Voici les prochaines étapes prévu par Takata Kite:
             </p>
          <ul>
            <li>Traduction du site en 2 autres langues</li>
            <li>Ajouts de marée et de la houle</li>
            <li>Création de nouveaux spots</li>
            <li>Ouverture d'écoles affiliés Takata Kite</li>
            
          </ul>
          
          <h4 className="inner-box-title"> PRÉDICTIONS</h4>
          <p>Vous vous demandez peut-être d'où provient les données.Pour le moment elles proviennent de l'<a href='https://darksky.net/dev'>API DARKSKY</a> Cet API tire ses données de plusieurs modèles météorologique:  </p>
          <div style={{margin:'auto', textAlign:'center'}}>
          <img src={ikorow} style={{width:'100%', maxWidth:'400px'}}/>
          </div>

          <ul>

            
            <li>The USA NCEP’s Canadian Meteorological Center ensemble model, available globally.</li>
            <li>Dark Sky’s own hyperlocal precipitation forecasting system, backed by radar data from the USA NOAA’s NEXRAD system, available in the USA, and the UK Met Office’s NIMROD system, available in the UK and Ireland.</li>
            <li>Environment and Climate Change Canada's Public Alert system, available in Canada.</li>
            <li>The USA NOAA’s Global Forecast System, available globally.</li>
            <li>The USA NOAA's High-Resolution Rapid Refresh Model, available in the continental USA.</li>
            <li>The German Meteorological Office's icosahedral nonhydrostatic, available globally.</li>
            <li>The USA NOAA’s Integrated Surface Database, available near populated areas globally for times greater than two weeks in the past.</li>
            <li>The USA NOAA/ESRL’s Meteorological Assimilation Data Ingest System, available near populated areas globally.</li>
            <li>EUMETNET's Meteoalarm weather alerting system, available in European Union countries and Israel.</li>
            <li>The USA NOAA’s North American Mesoscale Model, available in North America.</li>
            <li>The USA NOAA’s Public Alert system, available in the USA.</li>
            <li>The USA NOAA/NCEP’s Short-Range Ensemble Forecast, available in North America.</li>
          </ul>
          <h4 className="inner-box-title"> Algorithme Étoile, Grandeur Voile, Niveau</h4>
          <p>Certains algorithme ont été créer pour améliorer votre expérience voici leurs fonctionnement</p>
          <ul>
            <li>Étoile et vent: Dépend de la puissance du vent, de la rafale, de l'angle du vent et du type de spot</li>
            <li>Taille de l'aile: Dépend essentiellement de votre poids, puissance du vent, et la rafale</li>
            <li>Niveau de ride: Dépend de la profondeur, du type de spot, et de l'orientation du vent</li>
            <li>Éventuellement les vagues et la houle seront considérés </li>    
          </ul>
       
          
         
      </div>
        </div>
      </div>
    );
  }
}



export default (Apropos);
