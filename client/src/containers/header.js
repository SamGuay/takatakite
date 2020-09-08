import React, {Component} from 'react';
import {connect} from 'react-redux';
import Notification from './notification.js';


class Header extends Component {

  render () {
  

    return (
      <header className="an-header">
        <div className="header-right">
          <Notification/>
          
        </div>
      </header>
    );
  }
}

function mapStateToProps (state) {
  return {
    colorHeaderBanner: "#00bbd6"
  }
}

export default connect(mapStateToProps)(Header);
