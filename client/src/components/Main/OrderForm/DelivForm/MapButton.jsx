
import style from "./style.module.css"

// import yaMapMainPage from "./yamapmainpage"
import { useEffect } from "react"
import { addCoordinatesFrom } from "../../../../redux/ac/orderActions"


const MapButton = () => {

  // useEffect(() => {
  //   yaMapMainPage()

  // },[])

  return (
    <>

      <div className={style.mapbutton}>



<p>
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
 Показать на карте
  </button> */}
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
  <div id="map"></div>
  </div>
</div>
</div>
</>

  )
}


export default MapButton
