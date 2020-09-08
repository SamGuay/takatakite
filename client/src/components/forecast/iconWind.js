import React from 'react';

export const IconWind = (props) => {
    // Used a style const for changing icon box
    // color using props.
    
    
    let nameWi= 'wi wi-wind from-'+Math.round(props.windBearing)+'-deg'
    
    return (
      <i className={nameWi}></i>
    );
  }
  export default IconWind