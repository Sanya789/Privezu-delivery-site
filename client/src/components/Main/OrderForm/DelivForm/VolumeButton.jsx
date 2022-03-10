import React, { useState } from "react"
import style from "./style.module.css"

const VolumeButton = ({ inputVol, setInputVol }) => {
  const handleCreatingVol = (e) => {
    setInputVol(e.target.value)
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <button style={{borderRadius: "25px", height: "50px", width: "600px", fontSize: "25px" }} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#volumeButton" aria-expanded="false" aria-controls="volumeButton">
            Объём
          </button>
        </p>
      </div>
      <div className="collapse" id="volumeButton">
        <div className="card card-body"  >
          <div><input placeholder="0.1" style={{ width: '200px', marginLeft: '45%' }}
            onChange={handleCreatingVol} value={inputVol} /> m3</div>
        </div>
      </div>
    </>
  )
}


export default VolumeButton
