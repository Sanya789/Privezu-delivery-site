import { ADD_ORDER, GET_ALL_ORDERS, GET_ALL_CLIENT_ORDERS, GET_ALL_DRIVER_ORDERS,CHANGE_STATUS } from "../types/orderTypes";
// import {DELETE_TASK,CHANGE_STATUS} from '../types/taskTypes';

export const orderReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ORDER:
      return [...state, payload];

    case GET_ALL_ORDERS:
      return payload;

    case GET_ALL_CLIENT_ORDERS:
      return payload;

    case GET_ALL_DRIVER_ORDERS:
      return payload;
    
      case CHANGE_STATUS:
        console.log('pAYLOAD',payload)
        console.log(state)
        return {
          clientOrders: state.clientOrders.map(clientOrders=> { 
            if(clientOrders.id===payload){
            return {...clientOrders,status: !clientOrders.status}
        }
    
        return clientOrders
      })
        } 

    default:
      return state;
  }
};
