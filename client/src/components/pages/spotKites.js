import React, {Component} from 'react';
import {connect} from 'react-redux';
import imageUrl from '../../img/kiterightofway.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SpotKiteBlock from '../spotKites/spotKiteBlock'


const style = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('+ imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  paddingTop:'60px',
  paddingBottom:'60px',
  marginLeft:'-15px',
  marginRight:'-15px',
  marginBottom:'15px',
  

}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
    '&::before:hover':{borderBottom: '1px solid #00bbd6'},
    
    
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selectUnder:{
    borderBottom: '1px solid rgb(200,200,200)',
    '&::after':{borderBottom: '1px solid #00bbd6'},
    '&:hover:before':{borderBottom: '1px solid #00bbd6'},
    
  }
  
});

class Spotkites extends Component{
  constructor(){
    super()
    this.myRef = React.createRef() 
    this.state = {
      island: {name:'',index:0},
      spot:{name:'',index:0},
      name: 'hai',
      labelWidth: 0,
    };
  
  }
  componentWillMount(){
      this.setState({
        island: {name:'',index:this.props.infoSpot.indexIsland},
        spot:{name:'',index:this.props.infoSpot.indexSpot},})
        
  }
  componentDidMount(){
    if (window.location.hash!==''){
      this.scrollToMyRef()
    }
  }
  componentDidUpdate(prevProps,prevState){
    if (this.props.infoSpot!==prevProps.infoSpot ){
      this.setState({
        island: {name:'',index:this.props.infoSpot.indexIsland},
        spot:{name:'',index:this.props.infoSpot.indexSpot},})
    }
    //if (this.state.island.index!==prevState.island.index || this.state.spot.index!==prevState.spot.Index){}
  }
  handleChangeFirst = event => {
    this.setState({ [event.target.name]: { index:event.target.value}, spot:{index:0} });
  };
  handleChangeSecond = event => {
    this.setState({ [event.target.name]: { index:event.target.value} });
  };
  handleChangeThird = event => {
   if ( event.target.value[1]===-1){
     this.setState({ island:{index:event.target.value[0]},
        [event.target.name]: { index:event.target.value[1]} })}
   else {
      this.setState({ island:{index:-1},
            [event.target.name]: { index:-1} })};  
  };
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop+20)   
  render () {
  
    const { classes } = this.props;

    return (
      <div>
        <div className='row ' style={style}>
          <div className="overlay"></div>
          <h1  style={{color:'white', margin:'auto', textShadow:'2px 2px 4px rgba(0,0,0,0.4)',textAlign:'center'}}>SPOT DE KITES</h1>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="about-box-single">
              <h4 className="inner-box-title">MILLIEU FRAGILE <span></span></h4>
              <p>Les îles de la madeleine sont un  millieu fragile.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-box-single">
              <h4 className="inner-box-title">VENT ET SAISON</h4>
              <p>Direction: 360° Vents: 12 nd. à 65 nd. Saison:12 mois (Mai Juin Septembre Octobre meilleures conditions) </p>
            </div>
          </div> 
          <div className="col-md-4">
            <div className="about-box-single">
              <h4 className="inner-box-title">CONDITIONS VARAIABLES</h4>
              <p> Le vent aux iles est très variable. Il peut changer de direction rapidement et augmenter rapidement il faut donc toujours s'assurer de bien vérifier les prédictions et de ne pas naviguer seul. </p>
            </div>
          </div>
        </div>
      <div ref={this.myRef}>
        <h4 className="inner-box-title" >SPOT INFO</h4>
      </div>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.island.index}
            className={classes.selectUnder}
            onChange={this.handleChangeFirst}
            inputProps={{
              name: 'island',
              id: 'islandId',
            }}
          >
          <MenuItem value={-1} >Tous</MenuItem>
            {this.props.islands.map((islands,index)=>{ return <MenuItem value={index} >{islands.name}</MenuItem>})}
            
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          
          {
            this.state.island.index!==-1
            ?<Select
            className={classes.selectUnder}
            value={this.state.spot.index}
            onChange={this.handleChangeSecond}
            inputProps={{
              name: 'spot',
              id: 'spotId',
            }}
          >
          <MenuItem value={-1} >Tous</MenuItem> 
           { this.props.islands[this.state.island.index].spot.map((spots,index)=>{ return <MenuItem value={index}>{spots.name}</MenuItem>})}
            </Select>  
            
            :<Select
            className={classes.selectUnder}
            value={this.state.spot.index}
            onChange={this.handleChangeThird}
            inputProps={{
              name: 'spot',
              id: 'spotId',
            }}
          >
          <MenuItem value={-1} >Tous</MenuItem> 
            {this.props.islands.map((islands,indexIsland)=>islands.spot.map((spots,indexSpot)=>{return <MenuItem value={[indexIsland,indexSpot]} >{spots.name}</MenuItem> }))}
            </Select>  
          }
            
          
        </FormControl>
       
       
          <SpotKiteBlock indexIsland={this.state.island.index} indexSpot={this.state.spot.index}/>

        <div className="row">
         
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    teams: state.teams,
    islands: state.islands,
    infoSpot:state.infoSpot
  }
}


export default connect(mapStateToProps)(withStyles(styles)(Spotkites));
