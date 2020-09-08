import React from 'react';
import DarkSkyApi from 'dark-sky-api';
import {getAPIWeather,loadedAPIWeather} from "../../actions/forecast-actions/apiWeatherAction";
import {getAPITime} from "../../actions/forecast-actions/apiTimeAction";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component} from 'react';
import windAngle from './windAngle'
import windTypeFunction from './windTypeFunction'
import getColorForPercentage from './getColorForPercentage'
import starFunction from './starFunction'
import waterDescription from './waterDescription'
import levelFunction from './levelFunction';



DarkSkyApi.apiKey = '51d797abd0d87e09dc193ba57ee7f9af';
DarkSkyApi.units = 'ca'; // default 'us'
DarkSkyApi.language = 'fr'; // default 'en
DarkSkyApi.extendHourly(true);

function getHours(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  return a.getHours();

}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var date = a.getDate();
  var days = ['Di','Lu','Ma','Me','Je','Ve','Sa'];
  var dayOfWeek = days[a.getDay()]
  var time = dayOfWeek + ' ' + date  ;  
  return time;
}

function hourConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  return hour;
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


function hours(d) {
    
    var hoursArray=[]
    if (d===0) {
      let nowNow=new Date(Date.now());
      let hourNow=nowNow.getHours();
      for (var i = hourNow>5?hourNow:6;i<22;i++){
        hoursArray.push(i)
       }
    }
    else if (d===6) {
      let nowNow=new Date(Date.now());
      let hourNow=nowNow.getHours();
      for (var j =6;j<(hourNow>22?22:hourNow);j++){
        hoursArray.push(j)
       }
    }
    else {
      for (var k =6;k<22;k++){
        hoursArray.push(k)
       }
    }
    return hoursArray
  }

  
function dates() {
  let nowNow=new Date(Date.now());
   let dateNow=nowNow.getDate();
   var days = ['Di','Lu','Ma','Me','Je','Ve','Sa'];
    var selected
    var dayArray=[]
    let timeNow=nowNow.getHours();
    if (timeNow>21 || timeNow<6){
      var y= 1
    }
    else{
      var y=0
    }
    for (var i = y; i < 7; i++) { 
    var currentDate = new Date();
    if (i===0 && y===0){
      selected=true
    }
    else if (i===1 && y===1){
      selected=true
    }
    else {
      selected=false
    }
    currentDate.setDate(nowNow.getDate() + i);
    var dayOfWeek = days[currentDate.getDay()]
    dayArray.push({date:(dayOfWeek +' ' + currentDate.getDate()),selected:selected,hours:hours(i)})
  } return dayArray
  
}



function transformAPI(result,type,offAngle,islandName,spotName, profond, latitude, longitude,onlyWind) {
  
  let resultat = result.hourly.data.filter((data) => {
    let hour = getHours(data.time)
    return hour > 5 && hour < 22;
}).map(data=>{
    let windyType=windTypeFunction(data.windBearing,offAngle)
    
    
    return({ 
    islandName:islandName,
    spotName:spotName,
    latitude:latitude,
    longitude:longitude,
    time:data.time,
    dateConverted:timeConverter(data.time),
    hourConverted:hourConverter(data.time),
    dayNo:dayNo(data.time),
    summary:data.summary,
    windBearing:Math.round(data.windBearing),
    windSpeed:Math.round(data.windSpeed*0.539957),
    windGust:Math.round(data.windGust*0.539957),
    icon:data.icon,
    apparentTemperature:Math.round(data.apparentTemperature),
    temperature:Math.round(data.temperature),
    precipProbability: data.precipProbability,
    type:type,
    windAngle:windAngle(data.windBearing),
    windType:windyType,
    windSpeedColor: getColorForPercentage(data.windSpeed>70?100:data.windSpeed/70),
    windGustColor:getColorForPercentage(data.windGust>70?100:data.windGust/70),
    star: starFunction(type,windyType,Math.round(data.windSpeed*0.539957),Math.round(data.windGust*0.539957),onlyWind),
    waterDescription:waterDescription(type,windyType),
    kiteSize: 10,
    spotLevel:levelFunction(type,profond,windyType),

    }
  



  )})
  
  return resultat
}



class GetAPI extends Component {
    constructor(){
      super()
      this.state={
        sizeObject:0
      }
    }
     componentDidMount(){
     
      
     
      if (!this.props.apiWeatherLoaded)
      this.props.getAPITime(dates());
      
      { 
        let sizeSpots=1
        
       this.props.islands.map((islands)=> {
       
        
       
        islands.spot.map( (spot)=> {
            const position = {
              latitude: spot.latitude,
              longitude: spot.longitude
            }; 
            sizeSpots++
           this.setState( {sizeObject:sizeSpots})
         
          DarkSkyApi.loadItAll('minutely,flags,alert',position)
          .then(result => 
           { Promise.resolve(this.props.getAPIWeather({island:islands.name,spot:spot.name,
            data:transformAPI(result,spot.type,spot.offAngle,islands.name,spot.name,spot.profond, spot.latitude, spot.longitude, spot.onlyWind)}))
             
             
          })
          return null}
        )
        
        return null})
        
      }}
      componentDidUpdate(prevProps){
        if(this.props.apiWeather.length!==prevProps.apiWeather.length && this.props.apiWeather.length===this.state.sizeObject){
          this.props.loadedAPIWeather()
        }
      }

      
    
    
  
    render ()
 
     { 
       return <div>
        
       
      </div>}
    
  ;
}

function mapStateToProps(state) {
  return {
    apiWeatherLoaded: state.apiWeather.loaded,
    islands: state.islands,
    apiWeather:state.apiWeather.island
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getAPITime:getAPITime,
    getAPIWeather:getAPIWeather,
    loadedAPIWeather:loadedAPIWeather,
      
  },
    dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(GetAPI);