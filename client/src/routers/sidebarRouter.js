import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import {connect} from 'react-redux';
import {menuToggler} from '../actions/menuTogglerAction'
import {bindActionCreators} from 'redux'

class SidebarRouter extends Component {
  handleClickOutside = evt => {
    
    if (this.props.menu)
    {this.props.menuToggler(!this.props.menu)}
  };

  render() {
    return (
        <div></div>
    )
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
 
export default onClickOutside((connect(mapStateToProps,mapDispatchToProps)(SidebarRouter)));