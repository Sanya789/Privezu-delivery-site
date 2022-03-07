// import React, { useState } from "react";
// import {useDispatch} from 'react-redux';
//  import { useSelector } from "react-redux";
// //  var coordinates
// //  const yaMapMainPage = () => {
 
// // ymaps.ready(init);

// //  function init() {
// //     var myPlacemark,
// //         myMap = new ymaps.Map('map', {
// //             center: [55.753994, 37.622093],
// //             zoom: 9
// //         }, {
// //             searchControlProvider: 'yandex#search'
// //         });

// //     // Слушаем клик на карте.
// //     myMap.events.add('click', function (e) {
// //         var coords = e.get('coords');

// //         // Если метка уже создана – просто передвигаем ее.
// //         if (myPlacemark) {
// //             myPlacemark.geometry.setCoordinates(coords);
// //         }
// //         // Если нет – создаем.
// //         else {
// //             myPlacemark = createPlacemark(coords);
// //             myMap.geoObjects.add(myPlacemark);
// //             // Слушаем событие окончания перетаскивания на метке.
// //             myPlacemark.events.add('dragend', function () {
// //                 getAddress(myPlacemark.geometry.getCoordinates());
// //             });
// //         }
// //         getAddress(coords);
// //     });

// //     // Создание метки.
// //     function createPlacemark(coords) {
// //         return new ymaps.Placemark(coords, {
// //             iconCaption: 'поиск...'
// //         }, {
// //             preset: 'islands#violetDotIconWithCaption',
// //             draggable: true
// //         });
// //     }

// //     // Определяем адрес по координатам (обратное геокодирование).
// //     function getAddress(coords) {
// //         myPlacemark.properties.set('iconCaption', 'поиск...');
// //         ymaps.geocode(coords).then(function (res) {
// //             var firstGeoObject = res.geoObjects.get(0);

// //             myPlacemark.properties
// //                 .set({
// //                     // Формируем строку с данными об объекте.
// //                     iconCaption: [
// //                         // Название населенного пункта или вышестоящее административно-территориальное образование.
// //                         firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
// //                         // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
// //                         firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
// //                     ].filter(Boolean).join(', '),
// //                     // В качестве контента балуна задаем строку с адресом объекта.
// //                     balloonContent: firstGeoObject.getAddressLine()
                    
// //                 });
// //                 const dispatch = useDispatch();
// //                 dispatch(addCoordinates(coordinates))
// //                 coordinates = myPlacemark.properties._data.balloonContent
// //                 console.log(myPlacemark.properties._data.balloonContent)
// //             });
// //         }
// //         console.log(myPlaceMark)
// // }
// // }

// // export default yaMapMainPage

// import { addCoordinatesFrom } from "../../../../redux/ac/coordinatesActions"


// const yaMapMainPage = () => {
//     var arg = []
    
//     ymaps.ready(init);
    
//     // const [inputFrom,setFrom] = useState('')
// function init() {
//     // Стоимость за километр.
//     var DELIVERY_TARIFF = 20,
//     // Минимальная стоимость.
//         MINIMUM_COST = 500,
//         myMap = new ymaps.Map('map', {
//             center: [60.906882, 30.067233],
//             zoom: 9,
//             controls: []
//         }),
//     // Создадим панель маршрутизации.
//         routePanelControl = new ymaps.control.RoutePanel({
//             options: {
//                 // Добавим заголовок панели.
//                 showHeader: true,
//                 title: 'Расчёт доставки'
//             }
//         }),
//         zoomControl = new ymaps.control.ZoomControl({
//             options: {
//                 size: 'small',
//                 float: 'none',
//                 position: {
//                     bottom: 145,
//                     right: 10
//                 }
//             }
//         });
//     // Пользователь сможет построить только автомобильный маршрут.
//     routePanelControl.routePanel.options.set({
//         types: {auto: true}
        
//     });
// console.log('11')
// console.log(routePanelControl)

//     // if (routePanelControl._layout) {
//     // console.log(routePanelControl._layout._toInput?._stateMonitor?._values?.hint)
//     // }
//     // сonsole.log(routePanel?._layout?._toInput?._stateMonitor?._values?.hint)   //адрес куда
//     //  сonsole.log(routePanel?._layout?._toInput?._stateMonitor?._values?.value) //координаты куда
//     // сonsole.log(routePanel?._layout?._fromInput?._stateMonitor?._values?.hint) //адрекс откуда
//     // сonsole.log(routePanel?._layout?._fromInput?._stateMonitor?._values?.value) //адрекс куда
//     // console.log(routePanelControl)
//     // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
//     /*routePanelControl.routePanel.state.set({
//         fromEnabled: false,
//         from: 'Москва, Льва Толстого 16'
//      });*/

//     myMap.controls.add(routePanelControl).add(zoomControl);

//     // Получим ссылку на маршрут.
//     routePanelControl.routePanel.getRouteAsync().then(function (route) {

//         // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
//         route.model.setParams({results: 1}, true);

//         // Повесим обработчик на событие построения маршрута.
//         route.model.events.add('requestsuccess', function () {

//             var activeRoute = route.getActiveRoute();
//             if (activeRoute) {
//                 // Получим протяженность маршрута.
//                 var length = route.getActiveRoute().properties.get("distance"),
//                 // Вычислим стоимость доставки.
//                     price = calculate(Math.round(length.value / 1000)),
//                 // Создадим макет содержимого балуна маршрута.
//                     balloonContentLayout = ymaps.templateLayoutFactory.createClass(
//                         '<span>Расстояние: ' + length.text + '.</span><br/>' +
//                         '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
//                 // Зададим этот макет для содержимого балуна.
//                 route.options.set('routeBalloonContentLayout', balloonContentLayout);
//                 // Откроем балун.
//                 activeRoute.balloon.open();

//                 let coordinatesFrom = routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value
//                 arg.push(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value,routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
//                 // return console.log(coordinatesFrom)
//                 const dispatch = useDispatch();
//                 dispatch(addCoordinatesFrom(coordinatesFrom))
//                 console.log('1')
//                 const mapForm = useSelector(state=>state.coordinateFrom)
//                 console.log('mapForm2',mapForm)
//                 // setFrom(RoutePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)

//                 console.log(routePanelControl.routePanel._layout._toInput._stateMonitor._values.value)
//                 console.log(routePanelControl.routePanel._layout._fromInput._stateMonitor._values.value)
//             }
//         });

//     });
//     // Функция, вычисляющая стоимость доставки.
//     function calculate(routeLength) {
//         return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
//     }
// }

                
//  }

// export default yaMapMainPage