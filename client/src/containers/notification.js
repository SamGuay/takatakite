import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import IslandSelector from '../components/preference-components/islandSelector';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.showNotification = this.showNotification.bind(this);
  };

  

  showNotification() {
    if(!this.props.menu) {
    this.setState({toggle: !this.state.toggle});
    }
  }
  componentDidUpdate(prevProps, prevState,snapshot){
    if (prevProps.menu !== this.props.menu){
      if (this.state.toggle)
        this.setState({toggle: !this.state.toggle});
      }
    }
  
  render() {
    
    const toggleNotification = classNames ({
      'slide-content': true,
      'toggle' : this.state.toggle,
    });
    
    return (
      <div>
        <button className="notification-trigger an-circle-icon-btn notification" id="notification-unique" onClick={this.showNotification}>
          <i className={!this.state.toggle?"fa fa-cog fa-2x":"fa fa-check-circle fa-2x"} style={{"color":!this.state.toggle?"#00bbd6":"#d83d57"}}></i>
        </button>
        <div className={toggleNotification}>
          <h6>PRÉFÉRENCES</h6>
          <IslandSelector />
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    menu: state.menu
  }
}

export default  connect(mapStateToProps)(Notification);
