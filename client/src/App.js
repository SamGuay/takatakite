import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SidebarMenuRouters from './routers/routers.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import './static/css/App.css';
import './static/css/vendor-styles.css';
import './static/fonts/weather-icons.css';
import './static/fonts/weather-icons-wind.css';

import Header from './containers/header.js';



const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#00bbd6',
    accent1Color: 'transparent',
    backgroundColor: 'transparent',
  }
});

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
           
            <SidebarMenuRouters />
            
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

export default App;
