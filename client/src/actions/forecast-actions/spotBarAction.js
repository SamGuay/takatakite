
  

export  const spotBar = (value) => {
    return {
      type: 'LOAD_SPOT_BAR',
      value
    }
  }

export  const clearBar = () => {
    return {
      type: 'CLEAR_SPOT_BAR',
      
    }
  }