import React, {Component} from 'react';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import IconWeather from './iconWeather'
import RotateArrow from './rotateArrow'
import ReactTooltip from 'react-tooltip'
import getColorForPercentage from './getColorForPercentage'
import windAngle from './windAngle'
import {connect} from 'react-redux';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var date = a.getDate();
    var hour = a.getHours();
    var days = ['Di','Lu','Ma','Me','Je','Ve','Sa'];
    var dayOfWeek = days[a.getDay()]
    var time = dayOfWeek + ' ' + date + ' ' + hour + 'h'  ;
    
    return time;
  }
function colorDay(time) {
    return (dayNo(time))%2 ===0 ? 'rgba(0, 0, 0, 0.60)': 'rgba(0, 0, 0, 0.45)'
}

function dayNo(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var d = a.getDate();
    var m = a.getMonth();
    var y = a.getYear();
    return --m>=0 && m<12 && d>0 && d<29+(  
             4*(y=y&3||!(y%25)&&y&15?0:1)+15662003>m*2&3  
           ) && m*31-(m>1?(1054267675>m*3-6&7)-y:0)+d;
  }
class CurrentTable extends Component {
   
    componentWillMount(){
        this.setState({loadIt:false})
    }
    componentDidMount(){
        if ( this.props.allData.loaded){
            this.setState({loadIt:true})
        }
    }
    componentDidUpdate(prevProps){
        if (this.props.allData.loaded!=prevProps.allData.loaded && this.props.allData.loaded){
            this.setState({loadIt:true})
        }
    }

    render() {
        if (this.state.loadIt){
        return <div className='weather-table row'>
        <table id={'styleScrollbar'}>
        <thead >
        <tr >
        {this.props.allImport.hourly.data.map((data,index)=>{
             
             
            return <th key={index} className='header-table' style={{backgroundColor:colorDay(data.time)}}>{timeConverter(data.time)}</th>}
        )}
    
        
        </tr>
        </thead>
        <tbody>
        <tr>
        {this.props.allImport.hourly.data.map((data,index)=>{
             let speed =Math.round(data.windSpeed*0.539957)
             let pct = speed>70?100:speed/70
             let color= getColorForPercentage(pct)
             return <td key={index} className='td-table-windSpeed' style={{backgroundColor:color}}>{speed}</td>}
             )}
        </tr>
        <tr>
        {this.props.allImport.hourly.data.map((data,index)=>{
             let speed =Math.round(data.windGust*0.539957)
             let pct = speed>70?100:speed/70
             let color= getColorForPercentage(pct)
             return <td key={index} className='td-table-windSpeed' style={{backgroundColor:color}}>{speed}</td>}
             )}
        </tr>
        <tr>
        {this.props.allImport.hourly.data.map((data,index)=>{
             
            
             return <td key={index} className={'icon-table-wind'}> 
                 <span data-tip={windAngle(data.windBearing)} data-place={'right'}>
                <RotateArrow angle={data.windBearing} color={'rgb(50,50,50)'}/>
                </span> 
             </td>
         })}
           
        </tr>
        <tr>
        {this.props.allImport.hourly.data.map((data,index)=>{
             
            
             return <td key={index} className={'icon-table'}> 
                  <span data-tip={data.summary} data-place={'right'}>
                <IconWeather  nameWeather={data.icon}/>
            </span>
             </td>
         })}
           
        </tr>
        <tr>
        {this.props.allImport.hourly.data.map((data,index)=>{
             
            
             return <td key={index} className={'temp-small'}> 
                  <span data-tip={'Ressentie: '+ Math.round(data.apparentTemperature)+'°C Averse: ' + data.precipProbability+ '%'} data-place={'right'}>
                  {Math.round(data.temperature) + '°C'}
            </span>
             </td>
         })}
           
        </tr>

        </tbody>
        </table>
        <ReactTooltip effect={'solid'} />
        </div>
    }else {return null}
}
  
}
function mapStateToProps(state) {
    return {
      allImport:state.currentWeather.hourly,
        allData:state.currentWeather
        }
  }

export default connect(mapStateToProps)(CurrentTable);