import axios from "axios";
import {ADD_ORDER,GET_ONE_ORDER,GET_ALL_ORDERS,GET_COORD_FROM, GET_ALL_CLIENT_ORDERS, GET_ALL_DRIVER_ORDERS,CHANGE_STATUS} from "../types/orderTypes";

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order
});

export const addOrderDb= (inputVol, inputWidth,
    inputLength,inputHeight,inputDestTime,
    inputDepTime,inputMass,inputDateFrom,inputDateTo,inputDepCoord,inputDestCord) => async (dispatch2) => {
    const newOrder = {
        latitude: inputDepCoord,
        longitude: inputDestCord,
        volume:inputVol, 
        width:inputWidth,
        length:inputLength,
        heigth:inputHeight,
        destination:inputDestTime,
        departure:inputDepTime,
        weight:inputMass,
        departureDate:inputDateFrom,
        destinationDate:inputDateTo,
        status:false
    }
    console.log(newOrder)
  const response = await axios.post("http://localhost:3032/upload", newOrder);
  console.log('2')
  dispatch2(addOrder(response.data));
};


export const getOneOrder = (order) => ({
    type: GET_ONE_ORDER,
    payload:  order,
  });
  
  export const getOneOrderFromServer = (id) => async(dispatch) => {
    console.log('ia rabotaiu')
      const response = await axios(`http://localhost:3032/orders/${id}`)
  console.log('=======================>1',response.data)
  dispatch(getOneOrder(response.data))
  
  }


  export const getAllActiveOrders = (orders) => ({
    type: GET_ALL_ORDERS,
    payload:  orders,
  });
  
  export const getAllActiveOrdersFromServer = () => 
  async(dispatch) => {const response = await axios("http://localhost:3032/activeOrders")
  console.log('response',response.data)
  dispatch(getAllActiveOrders(response.data))
  
  }

  export const getClientOrders = (clientOrders) => ({
    type: GET_ALL_CLIENT_ORDERS,
    payload:  clientOrders,
  });
  
  export const getClientOrdersFromServer = () => 
  async(dispatch) => {const response = await axios("http://localhost:3032/clientOrders")
  console.log('!!!!!!!!!!!!!!!',response.data)
  dispatch(getClientOrders(response.data))
  
  }

  export const getDriverOrders = (driverOrders) => ({
    type: GET_ALL_DRIVER_ORDERS,
    payload:  driverOrders,
  });
  
  export const getDriverOrdersFromServer = () => 
  async(dispatch) => {const response = await axios("http://localhost:3032/driverOrders")
  console.log('!!!!!!!!!!!!!!!',response.data)
  dispatch(getDriverOrders(response.data))
  
  }


  export const changeStatus = (id) =>({
    type: CHANGE_STATUS,
    payload: id,
   })


  export const changeStatusDb=(id)=> async (dispatch) => {
   await axios.patch (`http://localhost:3032/changeStatus/${id}`) 
  dispatch(changeStatus(id))
  }


