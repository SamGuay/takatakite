import React from 'react';
import ReactTooltip from 'react-tooltip'
import {Component} from 'react';
import {connect} from 'react-redux';
import IconWeather from './iconWeather'
import IconWind from './iconWind'
import windAngle from './windAngle'

class CurrentWeather extends Component {
    
    componentDidMount(){
      
    }
    render() {
        
        return (
            <div className='' >
            <div className="" >
                <div className=" row" style={{}}>
                    <div className="col-6">
                       
                        <h1 style={{color:'#d83d57', margin:0, paddingTop:15}}>
                            <span data-tip={this.props.currentWeather.summary} data-place={'right'}>
                                <IconWeather className={'icon-popping'} nameWeather={this.props.currentWeather.icon} summary={this.props.currentWeather.summary}/>
                            </span>
                        </h1>
                        <h5><span data-place={'right'} data-tip={'Ressentie: '+this.props.currentWeather.apparentTemperature+'°C Averse: ' + this.props.currentWeather.precipProbability+ '%' }>{this.props.currentWeather.temperature}°C</span>
                         </h5>
                        
                        <p>Iles-de-la-Madeleine</p>
                    </div>
                        
                    <div className="col-6" style={{backgroundColor:'#d83d57' }}>
                        <span style={{display:'inline'}}>
                        <span style={{color:'white', margin:0, padding:0, fontSize:'1.5rem'}}>
                        <span style={{fontSize:'3rem'}} ><IconWind windBearing={this.props.currentWeather.windBearing} /></span> 
                        {' '+ windAngle(this.props.currentWeather.windBearing)}
                            <div style={{margin:0}}>
                            <span data-place={'top'} data-tip={'Vent Moyen'} style={{fontSize:'1rem', backgroundColor:'rgba(255,255,255,0.3)', padding:'4px 4px', borderRadius: 5,borderWidth: 1,borderColor: 'rgba(255,255,255,0.2)'}}>
                            {this.props.currentWeather.wind} kt.</span>
                            <span data-place={'top'} data-tip={'Rafale'} style={{fontSize:'1rem', backgroundColor:'rgba(0,0,0,0.2)', padding:'4px 4px', borderRadius: 5,borderWidth: 1,borderColor: 'rgba(255,255,255,0.2)', marginLeft:6}}>
                            {this.props.currentWeather.windGust} kt.</span>
                            </div>
                        </span>
                        
                        
                        
                        
                        </span>
                    </div>

                </div>
                </div>
                <ReactTooltip effect={'solid'} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      currentWeather: state.currentWeather,
      
    }
  }

export default connect(mapStateToProps)(CurrentWeather);