/* eslint-disable no-undef */
import React from "react";
import { useEffect, } from "react";

function AllOrdersMap({ allOrders }) {
  let ymaps = window.ymaps;

  useEffect(() => {
    ymaps.ready(init)
  }, [allOrders])

  function init() {

    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.

      }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackStretchyIcon',
        // Метку можно перемещать.
        draggable: true
      }),
      myPieChart = new ymaps.Placemark([
        5.847, 37.65
      ]);

    if (allOrders.activeOrders) {
      for (let i = 0; i < allOrders.activeOrders.length; i++) {

        myMap.geoObjects
          .add(myGeoObject)
          .add(myPieChart)



          .add(new ymaps.Placemark(
            allOrders.activeOrders[i].latitude.split(',').map(el => +el)

            , {
              balloonContent: `
            <li className="list-group-item">Номер отправления:  ${allOrders.activeOrders[i].id}</li>
            <li className="list-group-item">Откуда: ${allOrders.activeOrders[i].departure}</li>
            <li className="list-group-item">Куда:${allOrders.activeOrders[i].destination}</li>
            <li className="list-group-item">Вес:${allOrders.activeOrders[i].weight} </li>
            <li className="list-group-item">Габариты: ${allOrders.activeOrders[i].length}м х${allOrders.activeOrders[i].width}м х${allOrders.activeOrders[i].heigth}м</li>
            <li className="list-group-item">Объем:${allOrders.activeOrders[i].volume} м³</li> 
            <button type="button"  className="btn btn-sucess mx-1">Страница заказа</button>
            <button type="button"  className="btn btn-sucess mx-1">Принять</button>`
            }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
          }))
      }
    }
  }

  return (
    <>
      <div style={{ margin: "auto", borderRadius: "15px", width: "100%", marginBottom: "40px" }} id="map"></div>
    </>
  )
}

export default AllOrdersMap;
