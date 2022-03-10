import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import DriverOrderDropdown from "./DriverOrderDropdown"
import { getDriverOrdersFromServer } from "../../redux/ac/orderActions"




function DriverOrdersList() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getDriverOrdersFromServer()) }, [])
  const driverOrders = useSelector(state => state.order)

  return (
    <>
      {
        driverOrders.driverOrders ?
          driverOrders.driverOrders.map((driverOrders, indx) => {
            console.log(driverOrders.status);
            if (driverOrders.id === false) {
              return (
                <div>
                  <h4>Не активные</h4>
                  <DriverOrderDropdown key={driverOrders.id} driverOrders={driverOrders} indx={indx} id={driverOrders.id} />
                </div>
              )
            } else {
              return (
                <div>
                  <h4>Активные</h4>
                  <DriverOrderDropdown key={driverOrders.id} driverOrders={driverOrders} indx={indx} id={driverOrders.id} />
                </div>
              )
            }
          })
          : <p style={{ fontSize: "20px", marginLeft: "280px" }}>Нет заказов</p>
      }
    </>
  )
}

export default DriverOrdersList
