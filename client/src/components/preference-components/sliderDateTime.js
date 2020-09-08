import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component} from 'react';
import {changeSelectedDate,changePreferenceHour,changePreferenceDate} from "../../actions/forecast-actions/apiTimeAction";


const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    cssButtonDay:{
        borderRadius:'4px',
        border:'1px solid rgba(0,0,0,0.2)',
        padding:'0px 5px',
        fontSize:'0.8em',
        lineHeight:'1em',
        margin:'0 1px',
        textTransform:'none',
        width:'38px',
        minWidth:'38px',
        minHeight:'38px',
        height:'38px',
        boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.2) 0px 1px 4px'

    },
    cssButtonHour:{
        borderRadius:'3px',
        margin:'0 1px',
        border:'0.5px solid rgba(0,0,0,0.2)',
        padding:'0px',
        fontSize:'0.65em',
        textTransform:'none',
        width:'25px',
        minWidth:'25px',
        minHeight:'25px',
        height:'25px',
        boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 4px',

    },
    cssRoot: {
      color: 'rgb(10, 10, 10)',
      backgroundColor: 'rgb(255,255,255)',
      '&:hover': {
        backgroundColor: 'rgb(250,250,250)',  
      },
      '&:focus': {
        outlineStyle:'none'},

    },
    cssSelected: {
        color: 'rgb(255,255,255)',
        borderColor:'white',
        backgroundColor: 'rgb(216, 61, 87)',
        '&:hover': {
          backgroundColor: 'rgba(216, 61, 87,0.8)',  
        },
        '&:focus': {
          outlineStyle:'none'},
      },
      cssSelectedHour: {
        color: 'rgb(255,255,255)',
        borderColor:'rgb(110,110,110)',
        backgroundColor: 'rgb(110,110,110)',
        '&:hover': {
          backgroundColor: 'rgb(100,100,100)',  
        },
        '&:focus': {
          outlineStyle:'none'},
      },
})



class SliderDateTime extends Component {
   
    
    componentWillMount(){
        if (this.props.preferenceDateHour.hour!==undefined){
            
            var activeDate=this.props.preferenceDateHour.active
            this.setState({
                active:this.props.preferenceDateHour.active,
                activeHour:this.props.preferenceDateHour.activeHour,
                hours: this.props.apiTime[activeDate].hours
            })
        }
        else {
           
          this.setState({
            active:-1,
            hours:[0],
            activeHour:0
          }) 
           
        }
    }

    
    componentDidUpdate(prevProps,prevState){
        let indexReduxActive= this.props.apiTime.findIndex(data=>data.selected===true)
        
        
        if(this.state.active!==indexReduxActive ){
        let hours = this.props.apiTime[indexReduxActive].hours
        
            this.setState({
            active:indexReduxActive,
            hours:hours,
            activeHour:0
        })
        
        this.props.changePreferenceDate(this.props.apiTime[0].date,indexReduxActive)
        this.props.changePreferenceHour(hours[0],0)
        
    }
    }

    click(index,date){
      
        
        this.props.changeSelectedDate(index)
        let hours = this.props.apiTime[index].hours
        let indexHour= Math.round((hours.length)/2)-1
        this.setState({active: index,
        hours:hours,
        activeHour:indexHour
        })
        if (index===0){
        
       this.props.changePreferenceHour(hours[0],0)
        this.setState({active: index,
            hours:hours,
            activeHour:0
            }) 
        }
        
        else{
        
            this.props.changePreferenceHour(hours[indexHour],indexHour)
        this.setState({active: index,
            hours:hours,
            activeHour:indexHour
            })    
    
    }
       this.props.changePreferenceDate(date,index)
        
    }
    clickHour(index,hours){
        this.setState({activeHour:index})
           
         this.props.changePreferenceHour(hours,index)
    }
   
   
    render(){
        
    const { classes }=this.props;
    SliderDateTime.propTypes = {
        classes: PropTypes.object.isRequired,
    }   
    

    return (
        <div className='row' style={{
            backgroundColor:'rgb(216, 61, 87)',
            borderRadius:'5px',
            padding:'0px',
            
            
        }}>
        
          <div className='col-md-6 align-middle' style={{margin:'5px 0px'}}>
          {this.props.apiTime.map((date,index)=>
          <Button 
          key={index}
          className={classNames( this.state.active===index?classes.cssSelected:classes.cssRoot,classes.cssButtonDay)}
          onClick={this.click.bind(this, index,date.date)}>
          {date.date}
          </Button>)}
          
          </div >
          <div className='col-md-6 align-middle datePicker' style={{minHeight:'64px'}}>
          {this.state.hours.map((hours,index)=>
            <Button 
            key={index}
            className={classNames( this.state.activeHour===index?classes.cssSelectedHour:classes.cssRoot, classes.cssButtonHour)}
            onClick={this.clickHour.bind(this, index,hours)}
            >
            {hours + 'h'}
            
            </Button>
            )}
            </div>
          
          </div>  
        

    
    );
  

  
}
};
  function mapStateToProps(state) {
    return {
      apiTime: state.apiTime,
      preferenceDateHour:state.preferenceDateHour
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        changeSelectedDate:changeSelectedDate,
        changePreferenceHour:changePreferenceHour,
        changePreferenceDate:changePreferenceDate,
    },
      dispatch)
  }
  


  
  export default (withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(SliderDateTime)));