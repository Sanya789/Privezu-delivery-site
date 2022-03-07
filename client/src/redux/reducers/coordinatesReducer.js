import { initState } from "../initState";
import {GET_COORD_FROM} from "../types/orderTypes";

export const coordinateReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COORD_FROM:
      return payload;


    default:
      return state;
  }
};
