import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {pathName} from '../actions/pathNameAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import About from '../pages/about.js';
import ServicePage from '../pages/services.js';
import Contact from '../pages/contact.js';

import ForeCast from '../pages/forecast.js';
import MapPage from '../pages/mapPage.js'

import SpotKites from '../pages/spotKites.js';
import Ecolekite from '../pages/Ecolekite';
import Equipment from '../pages/equipement';
import HebergementPage from '../pages/hebergement';
import InfoImportantes from '../pages/infoImportantes';
import APropos from '../pages/aPropos';

class RoutesComponent extends Component {
 
  render() {
    this.props.pathNameAction(this.props.location.pathname)
    
    return (
      <div>
      
        <Route path="/pages/about" component={About}/>
        <Route path="/pages/services" component={ServicePage}/>
        <Route path="/pages/contact" component={Contact}/>
        <Route path="/pages/aPropos" component={APropos}/>
        <Route path="/pages/spotKites" component={SpotKites}/>
        <Route exact path="/" component={ForeCast}/>
        <Route path="/pages/hebergement" component={HebergementPage}/>
        <Route path="/pages/school" component={Ecolekite}/>
        <Route path="/pages/info" component={InfoImportantes}/>
        <Route path="/pages/equipment" component={Equipment}/>
        <Route path="/pages/mapPage" component={MapPage}/>
       
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({pathNameAction:pathName},dispatch)
}
export default withRouter(connect(null,mapDispatchToProps)(RoutesComponent));
