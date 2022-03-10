import React, { useState } from "react"
import style from "./style.module.css"


const SizeButton = ({ inputHeight, setInputHeight, inputLength, setInputLength, inputWidth, setInputWidth }) => {
  const handleCreatingDepHeight = (e) => {
    setInputHeight(e.target.value)
  }
  const handleCreatingDepLength = (e) => {
    setInputLength(e.target.value)
  }
  const handleCreatingDepWidth = (e) => {
    setInputWidth(e.target.value)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <button style={{ width: "300px", borderRadius: "25px", height: "50px", width: "600px", fontSize: "25px" }} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#sizeButton" aria-expanded="false" aria-controls="sizeButton">
            Размеры
          </button>
        </p>
      </div>
      <div className="collapse" id="sizeButton">
        <div className="card card-body"  >
          <input placeholder="высота... м" style={{ width: '200px', margin: "0 auto" }}
            onChange={handleCreatingDepHeight} value={inputHeight} />
          <input placeholder="ширина... м" style={{ width: '200px', margin: "0 auto" }}
            onChange={handleCreatingDepLength} value={inputLength} />
          <input placeholder="ширина... м" style={{ width: '200px', margin: "0 auto" }}
            onChange={handleCreatingDepWidth} value={inputWidth} />
        </div>
      </div>
    </>
  )
}


export default SizeButton
