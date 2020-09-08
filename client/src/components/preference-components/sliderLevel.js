import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {preferenceSliderLevel} from '../../actions/preferenceSliderLevel'
import {bindActionCreators} from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 225, marginLeft: 30, marginTop:20 , marginBottom:50 };
const marks = {
  0: {
    style: {
      fontSize:'0.875rem' , top:'3px'
    },label: 'Débutant',},

  50: {
    style: {
      fontSize:'0.875rem' , top:'3px'
    },label: 'Intermédiaire',},
  100: {
    style: {
      fontSize:'0.875rem' , top:'3px'
    },label: 'Avancé',},

};


class SlideRide extends Component {
  

    handleChange = sliderValues => {
        this.props.preferenceSliderLevel(sliderValues)}
        
    render()
     {
        let slide= this.props.sliding.sliderValue
           return(

        <div style={style}>
            
            <Slider value={slide} onChange={this.handleChange} railStyle={{'height':'6px',backgroundColor:'rgba(0, 0, 0, 0.30)'}} min={0} marks={marks} included={false} defaultValue={100} step={null} dotStyle={{'width':'12px','height':'12px','bottom':'-5px',marginLeft:'-6px'}} handleStyle={{'width':'20px','height':'20px', marginTop:'-8px',marginLeft:'-10px',backgroundColor:'#f50057','border':'solid 4px #f50057',boxShadow:'0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'}}/>
        </div> 
        )
    }
}


function mapStateToProps(state) {
    return {
      sliding: state.preferences.preferenceSliderLevel,
      
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({preferenceSliderLevel:preferenceSliderLevel},dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SlideRide);