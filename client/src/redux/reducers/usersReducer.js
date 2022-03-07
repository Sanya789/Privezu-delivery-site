
import {GET_USER, SET_USER} from '../types/userTypes'



export const userReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return payload;

      case GET_USER:
        // console.log('=========88888888888888888888',action);
        return payload;

    default:
      return state;
  }
}
