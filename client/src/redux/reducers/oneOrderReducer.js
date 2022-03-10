import { initState } from '../initState';
import { GET_ONE_ORDER } from '../types/orderTypes';

export const oneOrderReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ONE_ORDER:
      return payload
    default:
      return state;
  }
}
