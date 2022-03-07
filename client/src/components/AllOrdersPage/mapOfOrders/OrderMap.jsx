/* eslint-disable no-undef */
import React from "react";
import { useEffect, } from "react";
import yaMap from "./OrderMap/ymap";
import { useSelector, useDispatch } from 'react-redux'

function AllOrdersMap({ allOrders }) {
  let ymaps = window.ymaps;

  // useEffect(()=> {dispatch(getAllActiveOrdersFromServer())},[])
  // const allOrders = useSelector(state=>state.order)

  console.log('mapOrders222', allOrders)

  useEffect(() => {
    ymaps.ready(init)
  }, [allOrders])

  // if (!allOrders) return null

  // if (!allOrders.activeOrders) return null  
  // console.log('123',allOrders.activeOrders[0])



  // function init () {
  //   var myMap = new ymaps.Map("map", {
  //           center: [54.83, 37.11],
  //           zoom: 5
  //       }, {
  //           searchControlProvider: 'yandex#search'
  //       }),


  //         myPlacemark = new ymaps.Placemark([55.907228, 31.260503],
  //            {
  //           // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
  //           balloonContentHeader: "Балун метки", 
  //           balloonContentBody: "Содержимое <em>балуна</em> метки",
  //           balloonContentFooter: "Подвал",
  //           hintContent: "Хинт метки"
  //       },
  //       )






  //   myMap.geoObjects.add(myPlacemark );

  //   // Открываем балун на карте (без привязки к геообъекту).
  //   myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
  //       // Опция: не показываем кнопку закрытия.
  //       closeButton: false
  //   });

  //   // Показываем хинт на карте (без привязки к геообъекту).
  //   myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
  //       // Опция: задержка перед открытием.
  //       openTimeout: 1500
  //   });
  // } 
  // ymaps.ready(init);


  // if (!allOrders.length) return null

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

    // console.log('aaaa',allOrders.activeOrders[0].latitude.map(el=>+el))
    // allOrders.activeOrders.forEach((el)=>{
    if (allOrders.activeOrders) {
      console.log("-----", allOrders)
      for (let i = 0; i < allOrders.activeOrders.length; i++) {
        // console.log('aaaa',allOrders.activeOrders[i].latitude.map(el=>+el))


        myMap.geoObjects
          .add(myGeoObject)
          .add(myPieChart)



          .add(new ymaps.Placemark(
            // el.latitude.map(el=>+el)
            allOrders.activeOrders[i].latitude.split(',').map(el => +el)

            // [+`5${i}.228764`,10.551701]
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


        // })
      }
    }
  }

  // if (!allOrders?.activeOrders) return null

  // console.log('aaaa',allOrders.activeOrders[0].latitude)
  console.log('yaMap');
  return (
    <>

      <div style={{margin:"auto", borderRadius:"15px", width:"100%" , marginBottom:"40px"}} id="map"></div>
     

    </>
  )
}

export default AllOrdersMap;
