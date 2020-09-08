import React, {Component} from 'react';
import {connect} from 'react-redux';
import SpotKiteShow from '../spotKites/spotKiteShow'

class SpotKiteBlock extends Component{
    
    render(){
        
      if (this.props.indexIsland===-1 && this.props.indexSpot===-1){
          return <div>
              {this.props.islands.map(islands=>islands.spot.map(spots=>{return <div>{<SpotKiteShow spot={spots}/>}</div>}))}
          </div>  
        }
        else if (this.props.indexIsland!==-1 && this.props.indexSpot===-1){
            return <div>
                {this.props.islands[this.props.indexIsland].spot.map(spots=>{return <div>{<SpotKiteShow spot={spots}/>}</div>})}
            </div>  
          }
        else if (this.props.indexIsland!==-1 && this.props.indexSpot!==-1){
            var spots=this.props.islands[this.props.indexIsland].spot[this.props.indexSpot]
            return <div>
              
              <div>{<SpotKiteShow spot={spots}/>}</div>
          </div>  
        }
        else {return null}
    }

}

function mapStateToProps(state) {
    return {
      islands: state.islands,
    }
  }
export default connect(mapStateToProps)(SpotKiteBlock)