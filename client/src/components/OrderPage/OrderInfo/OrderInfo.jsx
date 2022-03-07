import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux' 
import { getOneOrderFromServer } from "../../../redux/ac/orderActions";
import { useParams } from 'react-router-dom'


function OrderInfo() {

  


  

  


  const params = useParams()
  const dispatch = useDispatch()
  useEffect(()=> {dispatch(getOneOrderFromServer(params.id))},[])
  const currentOrder = useSelector(state=>state.currentOrder)
console.log('workin workin')
console.log(params.id)
console.log('11111',currentOrder)

if (!currentOrder.order) return null
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">id заказа: {currentOrder?.order?.id}</li>
        <li className="list-group-item">дата отправки: {currentOrder?.order.departureDate} </li>
        <li className="list-group-item">дата доставки: {currentOrder?.order.destinationDate} </li>
        <li className="list-group-item">Откуда:{currentOrder?.order.departure}</li>
        <li className="list-group-item">Куда:{currentOrder?.order.destination}</li>
        <li className="list-group-item">Вес:{currentOrder?.order.id} кг</li>
        <li className="list-group-item">Габариты:{currentOrder?.order.length}м х{currentOrder?.order.width}м х{currentOrder?.order.heigth}м</li>
        <li className="list-group-item">Объем: {currentOrder?.order.volume} м³ </li>
       
      </ul>
    </div>
  )
}

export default OrderInfo;
