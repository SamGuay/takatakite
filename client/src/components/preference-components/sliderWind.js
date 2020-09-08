import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {preferenceSliderWind} from '../../actions/preferenceSliderWind'
import {bindActionCreators} from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 225, marginLeft: 30, marginTop:20 , marginBottom:50 };
const marks = {
  0: {
    style: {
      fontSize:'0.675rem' , top:'3px'
    },label: 'Tous',},
  20: {
    style: {
      fontSize:'0.675rem' , top:'3px'
    },label: 'Side/Side-On',},
  40: {
    style: {
      fontSize:'0.675rem' , top:'3px'
    },label: 'On-Shore',},
  60: {
      style: {
        fontSize:'0.675rem' , top:'3px'
      },label: 'Side-Off',},
  80: {
    style: {
      fontSize:'0.675rem' , top:'3px'
    },label: 'Off-Shore',},
  100: {
    style: {
      fontSize:'0.675rem' , top:'3px'
    },label: 'Side',},
  

};


class SliderWind extends Component {
  

    handleChange = sliderValues => {
        this.props.preferenceSliderWind(sliderValues)}
        
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
      sliding: state.preferences.preferenceSliderWind,
      
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({preferenceSliderWind:preferenceSliderWind},dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SliderWind);