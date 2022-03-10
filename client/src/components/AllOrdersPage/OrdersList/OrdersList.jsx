import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import OrderDropDown from './OrderDropDown/OrderDropDown'
import { getAllActiveOrdersFromServer } from "../../../redux/ac/orderActions"
import OrderMap from "../mapOfOrders/OrderMap"


function OrdersList() {

  const allOrders = useSelector(state => state.order)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getAllActiveOrdersFromServer()) }, [])

  return (
    <>
      {
        allOrders?.activeOrders ? <OrderMap allOrders={allOrders} /> : <p></p>
      }
      {
        allOrders.activeOrders ? allOrders.activeOrders.map((order, indx) => <OrderDropDown key={order.id} order={order} indx={indx} id={order.id} />)
          : <p>Заказов нет</p>
      }
    </>
  )

}

export default OrdersList
