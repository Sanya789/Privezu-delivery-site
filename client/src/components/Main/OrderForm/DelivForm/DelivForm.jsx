/* eslint-disable no-undef */
import style from "./style.module.css"


import React, { useEffect, useState } from "react"
// import yaMapMainPage from "./yamapmainpage"
// var ymaps
let ymaps = window.ymaps;



const DelivForm = ({inputDepTime,setInputDepTime,inputDestTime,setInputDestTime,inputDepCoord,inputDestCord,setInputDepCoord,setInputDestCoord}) => {

  // import { addCoordinatesFrom } from "../../../../redux/ac/coordinatesActions"

const [inputFrom,setFrom] = useState('')
const [inputTo,setTo] = useState('')
// const yaMapMainPage = () => {
  var arg = []
  
  useEffect(()=>{
    console.log('====', ymaps)
  ymaps.ready(init)
  },[])

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
        types: {auto: true}
        
    });
console.log('11')
console.log(routePanelControl)

    // if (routePanelControl._layout) {
    // console.log(routePanelControl._layout._toInput?._stateMonitor?._values?.hint)
    // }
    // сonsole.log(routePanel?._layout?._toInput?._stateMonitor?._values?.hint)   //адрес куда
    //  сonsole.log(routePanel?._layout?._toInput?._stateMonitor?._values?.value) //координаты куда
    // сonsole.log(routePanel?._layout?._fromInput?._stateMonitor?._values?.hint) //адрекс откуда
    // сonsole.log(routePanel?._layout?._fromInput?._stateMonitor?._values?.value) //адрекс куда
    // console.log(routePanelControl)
    // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
    /*routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Москва, Льва Толстого 16'
     });*/

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

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
                arg.push(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value,routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
                // return console.log(coordinatesFrom)
                // const dispatch = useDispatch();
                // dispatch(addCoordinatesFrom(coordinatesFrom))
                // console.log('1')
                // const mapForm = useSelector(state=>state.coordinateFrom)
                // console.log('mapForm2',mapForm)
                setInputDepTime(routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
                setInputDestTime(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value)

                console.log('aaaa',routePanelControl.routePanel._layout._previousPoints[0])
                console.log('bbbb',routePanelControl.routePanel._layout._previousPoints[1])
                console.log(routePanelControl)
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

                
//  }

// export default yaMapMainPage


  // const [inputDepTime,setInputDepTime] = useState('')
  // const [inputDestTime,setInputDestTime] = useState('')
   const handleCreatingDepTime = (e) => {
    console.log('1111')
    console.log(e.target.value)
    setInputDepTime(e.target.value) 
}
  const handleCreatingDestTime = (e) => {
  console.log(e.target.value)
  setInputDestTime(e.target.value)
}

// let arr = yaMapMainPage()
// console.log('arrrrr',arr)

  return (

    <>
    <h2 style={{ color: "green", marginLeft: "850px", marginBottom:"40px", marginTop:"40px", fontWeight:"bolder"}}>
      PRIVEZOO
    </h2>

<div className={style.delivform}>
  
    {/* <button   type="button"  className="btn btn-primary">Откуда</button> */}
    {/* <input  style={{margin:"1px",width:"300px", height:"40px", borderRadius:"15px", backgroundColor:""}} placeholder="Откуда" onChange={handleCreatingDepTime} value ={inputDepTime} /> */}

    <br/>
    {/* <button  stype="button" className="btn btn-primary">Куда</button> */}
    {/* <input style={{margin:"1px",width:"300px", height:"40px", borderRadius:"15px", backgroundColor:""}} placeholder="Куда" onChange={handleCreatingDestTime} value ={inputDestTime} /> */}

    
    <div style={{width:"100%", marginBottom:"40px"}} id="map"></div>
    
    
  </div>
</>


 
    
   
   
    

      
  
    
    

    
  
    
  


  )
}


export default DelivForm
