
import React, { useState } from "react"
import style from "./style.module.css"

const MassButton = ({inputMass,setInputMass}) => {
  // const [inputMass,setInputMass] = useState('')
 const  handleCreatingMass = (e) => {
    console.log('1111')
    console.log(e.target.value)
    setInputMass(e.target.value) 
}


  return (
    <>
    <div className={style.massbutton}>

<div>
<p>
  <button style={{width:"300px", borderRadius:"25px",height:"50px" , marginLeft:"630px",width:"600px", fontSize:"25px"}} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExamples" aria-expanded="false" aria-controls="collapseExamples">
    Масса
  </button>
</p>
</div>
</div>
<div className="collapse" id="collapseExamples">
  <div className="card card-body"  >


    <input placeholder="kg..." style={{width: '200px',marginLeft: '45%' }} 
    onChange={handleCreatingMass} value ={inputMass} />


  </div>
</div>
    
</>
  )
}


export default MassButton
