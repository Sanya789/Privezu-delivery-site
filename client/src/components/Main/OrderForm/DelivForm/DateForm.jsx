import React, { useState } from "react"
import style from "./style.module.css"

function DateForm({ inputDateFrom, setInputDateFrom, inputDateTo, setInputDateTo }) {
  const handleCreatingDateTo = (e) => {
    console.log('1111')
    console.log(e.target.value)
    setInputDateTo(e.target.value)
  }

  const handleCreatingDateFrom = (e) => {
    console.log('1111')
    console.log(e.target.value)
    setInputDateFrom(e.target.value)
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <button style={{ borderRadius: "25px", height: "50px", width: "600px", fontSize: "25px" }} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#dateForm" aria-expanded="false" aria-controls="dateForm">
            Когда
          </button>
        </p>
      </div>
      <div className="collapse" id="dateForm">
        <div className="card card-body">
          <ul style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center"}}>
            <li>
              <input type="date" style={{ width: '200px', margin: "0 auto" }} onChange={handleCreatingDateFrom} value={inputDateFrom} />
              Отправка
            </li>
            <li>
              <input type="date" style={{ width: '200px', margin: "0 auto" }} onChange={handleCreatingDateTo} value={inputDateTo} />
              Доставка
            </li>
          </ul>
      </div>
    </div>
    </>
  )
}


export default DateForm
