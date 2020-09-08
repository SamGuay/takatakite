

export default function (state=false, action) {
  switch(action.type) {
    case 'MENU_TOGGLE':
      return !state;

    default:
      return state;
  }

}
