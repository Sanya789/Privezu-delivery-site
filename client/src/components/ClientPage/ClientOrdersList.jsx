import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import ClientOrderDropdown from "./ClientOrderDropdown"
import { getClientOrdersFromServer } from "../../redux/ac/orderActions"




function ClientOrdersList() {

  const dispatch = useDispatch()
  const clientOrders = useSelector(state => state.order)
  useEffect(() => { dispatch(getClientOrdersFromServer()) }, [])
  if (!clientOrders.clientOrders) return null

  return (
    <>
      {
        clientOrders.clientOrders.map((clientOrders, indx) => {
          return (
            <div>
              <div className="col">
                <h4 >{clientOrders.status ? "Завершенные" : "Активные"}</h4>
              </div>
              <div className="col">
                <ClientOrderDropdown key={clientOrders.id} clientOrders={clientOrders} indx={indx} id={clientOrders.id} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ClientOrdersList
