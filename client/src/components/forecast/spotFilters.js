
import {Component} from 'react';
import {spotBar,clearBar} from "../../actions/forecast-actions/spotBarAction.js";
import {connect} from 'react-redux';
import kiteSize from '../forecast/kiteSize'
import {bindActionCreators} from 'redux';

function filteringTime(hour,date,dataAPI,preferences){
  
    let filteredTime
    let filterTime
    let filteredWindType
    let filterSkill
    let filterRide=null
    let filterSize

    filteredTime= dataAPI.map(island =>(island.data.filter(datas =>
         datas.dateConverted===date && datas.hourConverted===hour)
         )) 
    filterTime=filteredTime.map(data=>data[0])
    if (preferences.preferenceSliderWind.sliderName==='Tous'){filteredWindType=filterTime}
    else {filteredWindType= filterTime.filter(datas=>datas.windType===preferences.preferenceSliderWind.sliderName)}
         
    switch(preferences.preferenceSliderLevel.sliderName){
        case 'Débutant':
        filterSkill=filteredWindType.filter(data=>data.spotLevel==='Débutant')
        break
        case 'Intermédiaire':
        filterSkill=filteredWindType.filter(data=>data.spotLevel==='Intermédiaire' || data.spotLevel==='Débutant')
        break
        case 'Avancé':
        filterSkill=filteredWindType
        break
        default:
        filterSkill=filteredWindType
        break

    }
    
    if (preferences.preferenceSliderRide.sliderName==='Tous'){filterRide=filterSkill}
    else {filterRide= filterTime.filter(datas=>datas.type===preferences.preferenceSliderRide.sliderName)}
    var a
    filterSize= filterRide.map((spotbar)=>{ 
                                            a={...spotbar,
                                            kiteSize:kiteSize(preferences.preferenceSliderPoids.sliderValue,spotbar.windSpeed,spotBar.windGust)}
                                            return a})

    var filterSort=filterSize.sort((a,b)=>b.star-a.star)
    return filterSort

}   

function filteringPreferences(preferences,dataAPI){
    var islands= (preferences.preferenceIslands.toggleBox.filter(datas=>datas.toggled)).map(datas=>datas.name)
    var islandsFilter=null
    islandsFilter= dataAPI.island.filter(data => islands.includes(data.island))
    return islandsFilter
}

class SpotFilter extends Component {
    constructor(){
        super()
        this.state={
            spotBars:[],
            preferences:{preferenceIslands:{toggleBox:[]},preferenceSliderRide:{sliderName:[]},preferenceSliderLevel:{sliderName:[]},preferenceSliderPoids:{sliderName:[]},preferenceSliderWind:{sliderName:[]}},
            preferenceDateHour:{date:[],hour:[]},
            datas:{spotName:'',
            islandName:'',
            time:0,
            timeConverted:'',
            dayNo:'',
            summary:'',
            windBearing:0,
            windSpeed:0,
            windGust:0,
            icon:'',
            apparentTemperature:0,
            temperature:0,
            precipProbability: 0,
            type:'',
            windAngle:0,
            windType:'',
            windSpeedColor: '#fff',
            windGustColor:'#fff',
            star: 0,
            waterDescription:'',
            kiteSize: 0,
            spotLevel:'',},
            island:[]


        }

    }
    componentWillMount(){
        
        if(this.props.pathName==='/' &&  this.props.apiWeather.loaded ){
            
            this.setState({preferences:this.props.preferences,
                preferenceDateHour:this.props.preferenceDateHour,
                island:this.props.apiWeather.island
            })
        
            this.props.spotBar(filteringTime(this.props.preferenceDateHour.hour,this.props.preferenceDateHour.date,filteringPreferences(this.state.preferences,this.props.apiWeather),this.state.preferences))
        }  
            
          
        
    }
    componentDidUpdate(prevProps,prevState){
    
    
    
             
        if(this.props.apiWeather.loaded!==prevProps.apiWeather.loaded && this.props.apiWeather.loaded ){
            
            this.setState({preferences:this.props.preferences,
                preferenceDateHour:this.props.preferenceDateHour,
                island:this.props.apiWeather.island
            })}
        
        
        
            
            
        


        
        
        
        if (this.props.preferences!==prevProps.preferences && this.props.apiWeather.loaded ){
            this.setState({preferences:this.props.preferences})
           
        
        }
        if(this.props.preferenceDateHour.hour!==prevProps.preferenceDateHour.hour && this.props.apiWeather.loaded ) {
           this.setState({preferenceDateHour:{hour:this.props.preferenceDateHour.hour}}) 
        
        }
        if(this.props.preferenceDateHour.date!==prevProps.preferenceDateHour.date && this.props.apiWeather.loaded ) {
            this.setState({preferenceDateHour:{date:this.props.preferenceDateHour.date}}) 
         
         }
           
           

           
        
        
    }
      
    

    render() {
       
         this.props.spotBar(filteringTime(this.props.preferenceDateHour.hour,this.props.preferenceDateHour.date,filteringPreferences(this.state.preferences,this.props.apiWeather),this.state.preferences))
        
       
       
        return null
    }

}

function mapStateToProps(state) {
    return {
      preferences:state.preferences,
      preferenceDateHour:state.preferenceDateHour,
      apiWeather: state.apiWeather,
      pathName:state.pathName
  
    }
  }
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      spotBar:spotBar,
      clearBar:clearBar,
    
        
    },
      dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(SpotFilter);
