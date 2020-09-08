export const getAPITime = (value) => {
    return {
      type: 'GET_API_TIME',
      value,
    }
  }
  export const changeSelectedDate = (index) => {
    return {
      type: 'CHANGE_SELECTED_DATE',
      index,
    }
  }
  export const changePreferenceDate = (date,active) => {
    return {
      type: 'CHANGE_PREFERENCE_DATE',
      date,
      active
    }
  }
  export const changePreferenceHour = (hour,activeHour) => {
    return {
      type: 'CHANGE_PREFERENCE_HOUR',
      hour,
      activeHour
    }
  }