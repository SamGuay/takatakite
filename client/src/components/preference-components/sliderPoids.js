import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {preferenceSliderPoids} from '../../actions/preferenceSliderPoids'
import {bindActionCreators} from 'redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 225, marginLeft: 30, marginTop:20 , marginBottom:30 };



class SlidePoids extends Component {
  

    handleChange = sliderValues => {
        this.props.preferenceSliderPoids(sliderValues)}
        
    render()
     {
        let slide= this.props.sliding.sliderValue
           return(

        <div style={style}>
            <p style={ {fontSize:'0.875rem' , top:'3px'}}>
                {this.props.sliding.sliderValue +'kg - '+ this.props.sliding.sliderLbs + 'lbs'}
            </p>
            <Slider step={5}
        value={slide}
        onChange={this.handleChange}
        min={45} max={120} defaultValue={70} included={false} 
         railStyle={{'height':'6px',backgroundColor:'rgba(0, 0, 0, 0.30)'}} 
          dotStyle={{'width':'12px','height':'12px','bottom':'-5px',marginLeft:'-6px'}} handleStyle={{'width':'20px','height':'20px', marginTop:'-8px',marginLeft:'-10px',backgroundColor:'#f50057','border':'solid 4px #f50057',boxShadow:'0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'}}/>
        
        </div> 
        )
    }
}


function mapStateToProps(state) {
    return {
      sliding: state.preferences.preferenceSliderPoids,
      
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({preferenceSliderPoids:preferenceSliderPoids},dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SlidePoids);



  