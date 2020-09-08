import React from 'react';

export const IconStars = (props) => {
    // Used a style const for changing icon box
    // color using props.
    
    
    let stars=props.numberStars
    
    switch(stars) {
        case 0:
        return<span><i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons starsWhite'>star_border</i></span>
        case 1:
        return<span><i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons stars'>star</i></span>
        case 2:
        return<span><i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons stars'>star</i>
        <i className='material-icons stars'>star</i></span>
        case 3:
        return<span><i className='material-icons stars'>star</i>
        <i className='material-icons stars'>star</i>
        <i className='material-icons stars'>star</i></span>
        default: return<span><i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons starsWhite'>star_border</i>
        <i className='material-icons starsWhite'>star_border</i></span>
    }

   
  }
  export default IconStars