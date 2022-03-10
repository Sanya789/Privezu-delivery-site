import style from "./style.module.css"
import { useEffect } from "react"
import { addCoordinatesFrom } from "../../../../redux/ac/orderActions"


const MapButton = () => {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
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
