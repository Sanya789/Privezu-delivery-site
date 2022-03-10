import {GET_COORD_FROM} from "../types/orderTypes";

export const addCoordinatesFrom = (coordinates) => ({
    type: GET_COORD_FROM,
    payload: coordinates
  })
