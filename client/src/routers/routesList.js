import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import $ from 'jquery';
import {menuToggler} from '../actions/menuTogglerAction';
import {bindActionCreators} from 'redux';

class RoutesList extends Component {
  
  componentDidMount() {
    $('.sidebar-nav ul .has-child .child-menu').hide();
    $('.sidebar-nav ul .has-child > a ').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.child-menu').slideToggle(300);  
    });
    $('.sidebar-nav ul .has-child > ul > li > a').on('click',
    ()=> this.props.menuToggler(!this.props.menu));
    $('.sidebar-nav ul li.no-child').on('click',
    ()=> this.props.menuToggler(!this.props.menu));
  }


  render() {
    return (
      <div className="sidebar-nav">
        <ul>
        <li className="no-child">
            <Link to="/"><span className="material-icons">waves</span>Forecast</Link>
          </li>
         
          <li className="no-child">
            <Link to="/pages/mapPage"><span className="material-icons">map</span>Map</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/spotKites"><span className="material-icons">place</span>Spots de Kitesurf</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/school"><span className="material-icons">school</span>Écoles de Kitesurf</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/equipment"><span className="material-icons">beach_access</span>Équipements</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/hebergement"><span className="material-icons">hotel</span>Hébergement</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/info"><span className="material-icons">info</span>Info Importantes</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/aPropos"><span className="material-icons">accessibility_new</span>À Propos</Link>
          </li>
          <li className="no-child">
            <Link to="/pages/contact"><span className="material-icons">contact_phone</span>Contact</Link>
          </li>
         </ul> 
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({menuToggler:menuToggler},dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(RoutesList);
