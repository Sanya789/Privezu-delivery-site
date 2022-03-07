import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDriverOrdersFromServer } from "../../redux/ac/orderActions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function DriverOrderDropdown({ driverOrders, indx }) {

  console.log('23333',driverOrders);
  // if (!clientOrders) return null

  return (
    <>
      <div className={indx}>
        <div className='col'>

          <div className='row'>
            <div className='container'>
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${indx}`} aria-expanded="false" aria-controls={`collapseExample${indx}`}>
                {driverOrders.departure} -  {driverOrders.destination}, вес: {driverOrders.weight}, объем:{driverOrders.volume}, габариты:{driverOrders.length}м х{driverOrders.width}м х{driverOrders.heigth}
                </button>
                <span style={{ paddingLeft: '400px' }}>  Количество доставок из Города отправки</span>
              </p>
              <div className="collapse" id={`collapseExample${indx}`}>
                <div className="card card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Номер отправления: {driverOrders?.id}</li>
                    <li className="list-group-item">Откуда: {driverOrders?.departure}</li>
                    <li className="list-group-item">Куда:{driverOrders?.destination}</li>
                    <li className="list-group-item">Вес:{driverOrders?.weight} </li>
                    <li className="list-group-item">Габариты: {driverOrders?.length}м х{driverOrders?.width}м х{driverOrders?.heigth}м</li>
                    <li className="list-group-item">Объем:{driverOrders?.volume} м³</li>
                  </ul>
                </div>
                <button type="button" className="btn btn-sucess mx-1">Принять</button>
                <button type="button" className="btn btn-sucess mx-1"><Link to={`/orders/${driverOrders.id}`}>Страница заказа</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DriverOrderDropdown
