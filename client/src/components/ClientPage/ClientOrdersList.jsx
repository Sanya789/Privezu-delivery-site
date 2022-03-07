import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import ClientOrderDropdown from "./ClientOrderDropdown"
import { getClientOrdersFromServer } from "../../redux/ac/orderActions"




function ClientOrdersList() {

  const dispatch = useDispatch()
  const clientOrders = useSelector(state => state.order)
  useEffect(() => { dispatch(getClientOrdersFromServer()) }, [])
  console.log('clientOrders', clientOrders)
  if(!clientOrders.clientOrders) return null

  return (
    <>
      {
        // clientOrders.clientOrders ?
          clientOrders.clientOrders.map((clientOrders, indx) => {
            console.log(clientOrders.status);
            // if (!clientOrders.status ) 
            // {
              return (
                <div>
                  <div className="col">
                    <h4 >{clientOrders.status?"Завершенные":"Активные"}</h4>
                  </div>
                  <div className="col">
                    <ClientOrderDropdown key={clientOrders.id} clientOrders={clientOrders} indx={indx} id={clientOrders.id} />
                  </div>
                </div>
              )
            //  } 
            //  else {
            //   return (
            //     <div>
            //       <h4>Завершенные</h4>
            //       <ClientOrderDropdown key={clientOrders.id} clientOrders={clientOrders} indx={indx} id={clientOrders.id} />
            //     </div>
            //   )
            // }
          })
          // : <p>No orders</p>
      }
    </>
  )
}

export default ClientOrdersList
