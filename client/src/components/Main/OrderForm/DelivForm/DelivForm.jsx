/* eslint-disable no-undef */
import style from "./style.module.css"


import React, { useEffect, useState } from "react"
let ymaps = window.ymaps;



const DelivForm = ({ inputDepTime, setInputDepTime, inputDestTime, setInputDestTime, inputDepCoord, inputDestCord, setInputDepCoord, setInputDestCoord }) => {
  const [inputFrom, setFrom] = useState('')
  const [inputTo, setTo] = useState('')
  var arg = []

  useEffect(() => {
    ymaps.ready(init)
  }, [])

  function init() {
    // Стоимость за километр.
    var DELIVERY_TARIFF = 20,
      // Минимальная стоимость.
      MINIMUM_COST = 500,
      myMap = new ymaps.Map('map', {
        center: [0.906882, 30.067233],
        zoom: 9,
        controls: []
      }),
      // Создадим панель маршрутизации.
      routePanelControl = new ymaps.control.RoutePanel({
        options: {
          // Добавим заголовок панели.
          showHeader: true,
          title: 'Расчёт доставки'
        }
      }),
      zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: 'small',
          float: 'none',
          position: {
            bottom: 145,
            right: 10
          }
        }
      });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
      types: { auto: true }

    });

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

      // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
      route.model.setParams({ results: 1 }, true);

      // Повесим обработчик на событие построения маршрута.
      route.model.events.add('requestsuccess', function () {

        var activeRoute = route.getActiveRoute();
        if (activeRoute) {
          // Получим протяженность маршрута.
          var length = route.getActiveRoute().properties.get("distance"),
            // Вычислим стоимость доставки.
            price = calculate(Math.round(length.value / 1000)),
            // Создадим макет содержимого балуна маршрута.
            balloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<span>Расстояние: ' + length.text + '.</span><br/>' +
              '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
          // Зададим этот макет для содержимого балуна.
          route.options.set('routeBalloonContentLayout', balloonContentLayout);
          // Откроем балун.
          activeRoute.balloon.open();

          let coordinatesFrom = routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value
          arg.push(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value, routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
          setInputDepTime(routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
          setInputDestTime(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value)
          setInputDepCoord(routePanelControl.routePanel._layout._previousPoints[0])
          setInputDestCoord(routePanelControl.routePanel._layout._previousPoints[1])

        }
      });

    });
    // Функция, вычисляющая стоимость доставки.
    function calculate(routeLength) {
      return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    }
  }
  const handleCreatingDepTime = (e) => {
    setInputDepTime(e.target.value)
  }
  const handleCreatingDestTime = (e) => {
    setInputDestTime(e.target.value)
  }

  return (

    <>
      <h2 style={{ color: "green", marginBottom: "40px", marginTop: "40px", fontWeight: "bolder" }}>
        PRIVEZOO
      </h2>
      <div className={style.delivform}>
        <br />
        <div style={{ width: "100%", marginBottom: "40px" }} id="map"></div>
      </div>
    </>



















  )
}


export default DelivForm
