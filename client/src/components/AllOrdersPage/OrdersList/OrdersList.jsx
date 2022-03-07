import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
// import {addTask} from '../../redux/actionCreators/taskActions';
// import {addTaskDb} from '../../redux/actionCreators/taskActions';
import OrderDropDown from './OrderDropDown/OrderDropDown'
import { getAllActiveOrdersFromServer } from "../../../redux/ac/orderActions"
import ButtonSort from "./OrderDropDown/buttonSort/buttonSort"
import OrderMap from "../mapOfOrders/OrderMap"

// import yaMap from "./OrderMap/ymap";





function OrdersList() {
  // let ymaps = window.ymaps;

  const allOrders = useSelector(state => state.order)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getAllActiveOrdersFromServer()) }, [])
  console.log('allOrders', allOrders)



     return (
       <> 
       {/* <ButtonSort /> */}
       {
       allOrders?.activeOrders ? <OrderMap allOrders={allOrders}  /> : <p></p>
}
       {
       allOrders.activeOrders ? allOrders.activeOrders.map((order,indx)=><OrderDropDown  key={order.id} order={order} indx={indx} id={order.id} />)
       : <p>Заказов нет</p>
       }
       </>
    )

}

export default OrdersList
