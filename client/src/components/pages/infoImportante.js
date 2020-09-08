import React, {Component} from 'react';
import imageUrl from '../../img/infoImportante.jpg';
import ikorow from '../../img/ikorow.jpg';


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


class InfoImportante extends Component {
  

  render () {
    return (
      <div >
        <div className='row ' style={style}>
          <div className="overlay"></div>
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)',textAlign:'center'}}><i className={'fa fa-info-circle'}></i> INFO IMPORTANTES</h1>
        </div>
        <div className="row container">
        
        <div className="about-box-single">
          <h4 className="inner-box-title"><i className={'fa fa-tree'} style={{color:'grey'}}></i> Attention, FRAGILE!!</h4>
          <p>Les îles sont fragiles et vulnérable, afin de les préserver le plus longtemps possible et d'éviter la dégradation causée par l'humain il faut respecter certaines règles et utilisé le gros bon sens.</p>
          <ul>
            <li>Ramassez vos déchets (recycler,composter,valoriser, réutiliser, jeter)</li>
            <li>Laissez le spot de kite plus propre qu'il était (Ramasser donc la bouteille qui traine à côté de vous</li>
            <li>Ne pas couper à travers les foins de dunes (utiliser les sentiers)</li>
            <li>Ne pas rouler ou se stationner sur les millieux fragile (utiliser les parking). En d'autres mots si vous n'êtes pas sur de l'asphalte ou de la garnotte vous êtes à risque</li>
            <li>Faites-votre vidange de Camper/Roulotte/SafariCondo dans un endroit désigner (camping) Pas dans les dunes</li>
            <li>Respectez les pancartes de préservation et les indications (N'allez pas dans l'enclos des pluviers siffleur)</li>
            <li>Faites preuves de gros bon sens, si vous avez un doutes ne le faites pas!</li>
            <li>Souriez vous êtes filmé! (En fait pas vraiment mais toutes se sait aux îles)</li>
            <li>Éteignez vos feu, protéger les tison, une dune peut prendre rapidement en feu</li>
          </ul>
          <h4 className="inner-box-title"><i className={'fa fa-list'} style={{color:'grey'}}></i> Réglementation</h4>
          <p>La municipalité des îles a certains règlements en voici quelques-uns</p>
          <ul>
            <li>Lorsque vous vous stationnez sur le long de la 199 vos pneus ne doivent pas toucher l'asphalte (ce qui veux dire que vous devez être complètement sur la garnotte)</li>
            <li>Ne pas se stationner dans les dunes (Évidemment), mais éviter les chemins de sable vous pouvez vous enfoncer rapidement (si vous êtes prit essayer de dégonfler un pneu)</li>
            <li>Ne pas envoyer votre kite dans les ligne d'hydro (Peut paraître simple, mais cela arrive à certain kiteur)</li>
            <li>L'avant dernière semaine de Septembre et les semaines qui suivent ne pas naviguer en lagune (chasse aux canards en vigueur)</li>
            <li>Faire un feu sur la plage nécéssite normalement un permis</li>
          </ul>
          <h4 className="inner-box-title"><i className={'fa fa-shield'} style={{color:'grey'}}></i> Sécurité</h4>
          <p>Chaque spot à ses risques et particularité, informez-vous toujours auprès d'un habitué au sinon sur la section SPOT DE KITES vous y trouverez des infos utile.</p>
          <ul>
            <li>Respecter les règles de navigations (R.O.W. Rules of way)</li>
            <li>Vérifier toujours les lignes d'hydro puisqu'elle sont omniprésente</li>
            <li>Certaine lagune sont très peu profonde à certains endroit et en marée basse Attention!</li>
            <li>Le vents peut mourir, changer, augmenter en peu de temps </li>
            <li>Ne naviguer jamais seule</li>
            <li>Ne pas mettre de leash</li>
            <li>Pas de bateaux ni de lifeguard qui guettent, connaissez bien le self rescue</li>
            <li>Ne pas s'ajouter à un spot overloader (il y a tellement de spot éviter les collisions)</li>
          </ul>
          <h4 className="inner-box-title"> <i className={'fa fa-anchor'} style={{color:'grey'}}></i> Règles de navigation R.O.W.</h4>
          <p>Les règles de navigations s'appliquent partout dans le monde, dès que vous êtes capable de tirer des bord alors vous y êtes assujettis. Toutefois éviter les collision à tout prix</p>
          <div style={{margin:'auto', textAlign:'center'}}>
          <img src={ikorow} style={{width:'100%', maxWidth:'600px'}}/>
          </div>
          <ul>
            <li>Éviter les collisions</li>
            <li>Kiteur haut-de-vent/upwind lève son kite, kiteur bas-de-vent/downwind baisse son kite  </li>
            <li>Avantage au kiteur à babord/starboard (Kite à Droite). Le kiteur en avantage passe upwind et l'autre downwind</li>
            <li>Dépassement d'un kiteur plus lent que soit doit se faire downwind à celui-ci</li>
            <li>Kiteur qui rentre à l'eau à l'avantage. </li>
            <li>Kiteur qui surf une vague à l'avantage</li>
            <li>Gros bon sens sur la plage</li>
          </ul>
      </div>
        </div>
      </div>
    );
  }
}



export default (InfoImportante);
