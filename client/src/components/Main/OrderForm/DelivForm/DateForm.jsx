import React, { useState } from "react"
import style from "./style.module.css"

// inputDateFrom,setInputDateFrom,inputDateTo,setInputDateTo

function DateForm ({inputDateFrom,setInputDateFrom,inputDateTo,setInputDateTo}) {
  // const [inputDateFrom,setInputDateFrom] = useState('')
  // setFormData(prev => {
  //   console.log(prev)
  //   return {...prev, 
  //   inputDateForm: '123'
  //   }
  // })

//   const testHandler =(e) => {
// e.preventDefault()
// setFormData(prev => {
//     console.log(prev)
//     return {...prev, 
//     inputDateForm: 
//     }
//   })
// }
  // const [inputDateTo,setInputDateTo] = useState('')
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
<div className={style.dateform}> 
<p>
  <button style={{marginLeft:"630px",borderRadius:"25px",height:"50px", width:"600px",fontSize:"25px"}} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#dateForm" aria-expanded="false" aria-controls="dateForm">
    Когда
  </button>
  
</p>
</div>

<div className="collapse" id="dateForm">
  <div className="card card-body"  >


  <div><input type="date" style={{width: '200px',marginLeft: '45%' }} 
  onChange={handleCreatingDateFrom} value ={inputDateFrom}  /> Отправка </div>
  <div><input type="date" style={{width: '200px',marginLeft: '45%' }}  
  onChange={handleCreatingDateTo} value ={inputDateTo} /> Доставка</div>


  </div>
</div>
</>
  )
}


export default DateForm
