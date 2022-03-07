
import OrdersList from './OrdersList/OrdersList'
import AllOrdersMap from './mapOfOrders/OrderMap'


function AllOrdersPage() {



  return (
    <>

      <h2 style={{ color:"green", marginLeft:"830px", marginBottom:"40px", marginTop:"40px", fontWeight:"bolder"}}>ВСЕ ЗАКАЗЫ</h2>
      {/* <AllOrdersMap /> */}

      <OrdersList />
    </>
  )
}

export default AllOrdersPage
