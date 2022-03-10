import React, { useState } from "react"
import { changeStatusDb } from "../../../../redux/ac/orderActions"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function OrderDropDown({ order, indx }) {

  return (
    <>
      <div className={indx}>
        <div className='col'>
          <div className='row'>
            <div className='container'>
              <p>
                <button className="btn btn-primary" style={{width:'65%'}} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${indx}`} aria-expanded="false" aria-controls={`collapseExample${indx} `}>
                  {order.departure} -  {order.destination}, вес: {order.weight}, объем:{order.volume}, габариты:{order.length}м х{order.width}м х{order.heigth}м
                </button>
                <span style={{ paddingLeft: '400px' }}>  </span>
              </p>
              <div className="collapse" id={`collapseExample${indx}`}>
                <div className="card card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Номер отправления: {order.id}</li>
                    <li className="list-group-item">Откуда: {order.departure}</li>
                    <li className="list-group-item">Куда:{order.destination}</li>
                    <li className="list-group-item">Вес:{order.weight} </li>
                    <li className="list-group-item">Габариты: {order.length}м х{order.width}м х{order.heigth}м</li>
                    <li className="list-group-item">Объем:{order.volume} м³</li>

                  </ul>
                </div>
                <button type="button"  className="btn btn-sucess mx-1"><Link to={`/orders/${order.id}`}>Страница заказа</Link></button>
                <button type="button"   className="btn btn-sucess mx-1">Принять</button>
                <button >Чат</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default OrderDropDown
