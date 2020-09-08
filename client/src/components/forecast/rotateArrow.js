import React from 'react';

export const RotateArrow = (props) => {
 
    
    
    if (props.color!=='' || props.color!==null)
    {return (
      <i className="material-icons" style={{transform: 'rotate('+(props.angle+90)+'deg)', color:props.color}}>arrow_right_alt</i>
    )}
    else
    {return (
      <i className="material-icons" style={{transform: 'rotate('+(props.angle+90)+'deg)'}}>arrow_right_alt</i>
    )}
  }
  export default RotateArrow