/*
 * filename: routers.js
 * mainly responsivle for all routes component
 * change and sidebar routlist menu item
 * */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesList from './routesList.js';
import RoutesComponent from './routesComponent.js';
import { Scrollbars } from 'react-custom-scrollbars';
import Footer from '../components/footer.js';
import {menuToggler} from '../actions/menuTogglerAction';
import {bindActionCreators} from 'redux';
import SliderDateTimeMap from '../components/preference-components/sliderDateTimeMap'
import {initializeSpot} from '../actions/mapping-actions/mapping-action'


class SidebarMenuRouters extends Component {
  constructor () {
    super();
    this.state = { menu:false, toggle:false };
    this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
  }
  
  // menu collapse when on mobile function
  menuCollapseWithResize (){
    if (window.innerWidth < 991) {
      this.setState({menu: false});
    }
    if (window.innerWidth > 991) {
      this.setState({menu: false});
    }
  }

  // Sidebar collapse when tablet
  componentDidMount () {
    window.addEventListener('resize', this.menuCollapseWithResize);
    document.addEventListener('mousedown', this.handleClickOutside);
    if (window.innerWidth < 991) {
      this.setState({menu: false});
    }
    
  }
  
  // Sidebar collapse when tablet
  componentWillUnmount() {
    window.removeEventListener('resize', this.menuCollapseWithResize);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  componentDidUpdate(prevProps, prevState,snapshot){
    
    
    if (prevProps.menu !== this.props.menu){
    this.setState({toggle:this.props.menu})}
    
    
  }
    
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.menu) {
      this.props.menuToggler(!this.props.menu)
      ;
    }
  }

  
  render() {
    
    const headerStyle = {
      background: this.props.colorHeader.color
    }

    const containerStyle = {
      background: this.props.colorSidebar.color
    }
    

    // Page content class change based on menu toggle
    const pageContent = classNames ({
      'readmin-page-content' : true,
      'menu-open': this.state.toggle
    });

    // Sidebar class based on bg color
    const sidebarClass = classNames ({
      'menu-drawer' : true,
      'has-bg': true,
    });

    // header left part with logo and toggle button
    const HeaderLogoWithMenu = () => (
      <div className="an-header" style={headerStyle}>
        <div className="header-left" id="menu-unique"
        >

          
            <i className="material-icons" 
             onClick={() => this.props.menuToggler(!this.props.menu)}> 
            {this.state.toggle ? "clear" : "home"}
            </i>            
          
          <a className="brand" href='\'>Takata Kite</a>
          
        </div>
      </div>
    );
   
    if (this.props.pathName==='/pages/mapPage'){
    return (
      <div>
       
      <Router >
        
        <div>
          <div className="readmin-sidebar" ref={this.setWrapperRef}>
           
            <HeaderLogoWithMenu /> 
            <div >
              <Drawer open={this.state.toggle}
                className={sidebarClass}
                containerClassName="sidebar-initial-color"
                containerStyle={containerStyle}
              >
                <Scrollbars>
                  <RoutesList />
                </Scrollbars>
              </Drawer>
            </div>
          </div>
          <div style={{maxHeight:'100%'}}>
            
            <RoutesComponent  />
            
            <SliderDateTimeMap />
            
          </div>
        </div>
        
      </Router>
      </div>
    );
  }
  else {
    this.props.initializeSpot()
    return (
      
     <div>
       
      <Router >
        
        <div>
          <div className="readmin-sidebar" ref={this.setWrapperRef}>
           
            <HeaderLogoWithMenu /> 
            <div >
              <Drawer open={this.state.toggle}
                className={sidebarClass}
                containerClassName="sidebar-initial-color"
                containerStyle={containerStyle}
              >
                <Scrollbars>
                  <RoutesList />
                </Scrollbars>
              </Drawer>
            </div>
          </div>
          <div className={pageContent}>
            
            <RoutesComponent />
            
          </div>
          <Footer />
        </div>
        
      </Router>
      </div>
    );
  }

}
}


function mapStateToProps(state) {
  return {
    colorHeader: state.headerActiveStyle,
    colorSidebar: state.sidebarActiveStyle,
    menu: state.menu,
    pathName:state.pathName,
    
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({menuToggler:menuToggler,
    initializeSpot:initializeSpot,
  },dispatch)
}



export default (connect(mapStateToProps,mapDispatchToProps)(SidebarMenuRouters));
