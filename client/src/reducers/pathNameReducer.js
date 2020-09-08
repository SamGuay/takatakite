

export default function (state='/', action) {
  switch(action.type) {
    case 'CHANGE_PATH':
      return action.pathName;

    default:
      return state;
  }

}
