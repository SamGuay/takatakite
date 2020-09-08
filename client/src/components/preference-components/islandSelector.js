import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import {preferenceIslandInitial} from '../../actions/preferencesIslandAction'
import {preferenceIslandSwitch} from '../../actions/preferencesIslandAction'
import {bindActionCreators} from 'redux';
import SliderRide from './sliderRide'
import SliderLevel from './sliderLevel'
import SliderPoids from './sliderPoids'
import SliderWind from './sliderWind'

class IslandSelector extends Component {
   
   
    
    componentDidMount () 
    
    { if(this.props.toggleBox.length===0)
       {this.props.islands.map((island) =>  (
        this.props.preferenceIslandInitial(island.name)
    )
    )}        
    };
    
 

    islandsLoop () {
        if (this.props.toggleBox.length > 0) {
           
          }
      
       
       
       
       

        return this.props.islands.map((island,index) => {
           
           
            let toggledState=true
            if (this.props.toggleBox.length > 0) {
            toggledState= this.props.toggleBox[index].toggled
            }
            return( 

            <li key={island.id.toString()}>
                <FormControlLabel
                        control={<Switch
                            checked={toggledState}
                            onChange={() => 
                                this.props.preferenceIslandSwitch(island.name,index)
                                
                            
                            }/>}
                        label={island.name}
                        labelPlacement="end"
                        
                    />
          </li>

          )  
        }
        ) 
    }

    render() {
     
      return (
        <div className='fluid-container'>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                <FormLabel component="legend">SECTEUR</FormLabel>
                    <div>
                        <ul style={{listStyle:"none",paddingLeft:"10px"}}>
                            {this.islandsLoop()}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-8">
                    <FormLabel component="legend">TYPE DE RIDE</FormLabel>
                        <SliderRide />
                    <FormLabel component="legend">NIVEAU</FormLabel>
                        <SliderLevel/>
                    <FormLabel component="legend">POIDS</FormLabel>
                        <SliderPoids/>
                    <FormLabel component="legend">VENT</FormLabel>
                        <SliderWind/>
                </div>        
            </div>
        </div>
        
      );
    }
  }
  function mapStateToProps(state) {
    return {
      islands: state.islands,
      islandIndex: state.preferences,
      toggleBox: state.preferences.preferenceIslands.toggleBox
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({preferenceIslandInitial:preferenceIslandInitial,
        preferenceIslandSwitch:preferenceIslandSwitch,
    },dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(IslandSelector);