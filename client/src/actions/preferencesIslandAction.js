export const preferenceIslandInitial = (nameIsland) => {
    return{
      type:'PREFERENCE_ISLAND_INITIAL',
      nameIsland
    }
  }
export const preferenceIslandSwitch = (nameIsland,index) => {
    return{
      type:'PREFERENCE_ISLAND_SWITCH',
      nameIsland,
      index
      
    }
  }