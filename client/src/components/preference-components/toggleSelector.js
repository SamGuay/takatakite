import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {bindActionCreators} from 'redux';


class toggleSelector extends Component {

    render()
      {  return(

        <div>
                    <FormControlLabel
                        control={<Switch
                            checked={true}
                            onClick={() => 
                                this.props.preferenceIslandInitial(island.name)
                                
                            
                            }/>}
                        label={island.name}
                        labelPlacement="end"
                        
                    />

        </div> 
    )
}
}


function mapStateToProps(state) {
    return {
      islands: state.islands,
      islandIndex: state.preferences,
      checkedBox: state.preferences.preferenceIslands
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({preferenceIsland:preferenceIsland},dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Selector);