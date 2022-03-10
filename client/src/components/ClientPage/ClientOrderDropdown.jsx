import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClientOrdersFromServer } from "../../redux/ac/orderActions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeStatusDb } from "../../redux/ac/orderActions";
function ClientOrderDropdown({ clientOrders, indx }) {
  const dispatch = useDispatch()
  const accept = ()  => {
        dispatch(changeStatusDb(clientOrders.id))
  }

  return (
    <>
      <div className={indx}>
        <div className='col'>
          <div className='row'>
            <div className='container'>
              <p>
                <button className="btn btn-primary" type="button" style={{width:'65%'}} data-bs-toggle="collapse" data-bs-target={`#collapseExample${indx}`} aria-expanded="false" aria-controls={`collapseExample${indx}`}>
                {clientOrders.departure} -  {clientOrders.destination}, вес: {clientOrders.weight}, объем:{clientOrders.volume}, габариты:{clientOrders.length}м х{clientOrders.width}м х{clientOrders.heigth}
                </button>
                <span style={{ paddingLeft: '400px' }}> </span>
              </p>
              <div className="collapse" id={`collapseExample${indx}`}>
                <div className="card card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Номер отправления: {clientOrders?.id}</li>
                    <li className="list-group-item">Откуда: {clientOrders?.departure}</li>
                    <li className="list-group-item">Куда:{clientOrders?.destination}</li>
                    <li className="list-group-item">Вес:{clientOrders?.weight} </li>
                    <li className="list-group-item">Габариты: {clientOrders?.length}м х{clientOrders?.width}м х{clientOrders?.heigth}м</li>
                    <li className="list-group-item">Объем:{clientOrders?.volume} м³</li>
                  </ul>
                </div>
                <button type="button" onClick={accept} style={{width:'65%'}} className="btn btn-sucess mx-1">Завершить</button>
                <button type="button"  className="btn btn-sucess mx-1"><Link to={`/orders/${clientOrders.id}`}>Страница заказа</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientOrderDropdown
