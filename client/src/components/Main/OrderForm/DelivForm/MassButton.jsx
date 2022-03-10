
import React, { useState } from "react"
import style from "./style.module.css"

const MassButton = ({ inputMass, setInputMass }) => {
  const handleCreatingMass = (e) => {
    setInputMass(e.target.value)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <p>
            <button style={{ width: "300px", borderRadius: "25px", height: "50px", width: "600px", fontSize: "25px" }} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamples" aria-expanded="false" aria-controls="collapseExamples">
              Масса
            </button>
          </p>
        </div>
      </div>
      <div className="collapse" id="collapseExamples">
        <div className="card card-body"  >
          <input placeholder="kg..." style={{ width: '200px', margin: "0 auto" }}
            onChange={handleCreatingMass} value={inputMass} />
        </div>
      </div>
    </>
  )
}


export default MassButton
