
import React, { useState } from "react"
import style from "./style.module.css"


const SizeButton = ({inputHeight,setInputHeight,inputLength,setInputLength,inputWidth,setInputWidth}) => {
  // const [inputHeight,setInputHeight] = useState('')
  // const [inputLength,setInputLength] = useState('')
  // const [inputWidth,setInputWidth] = useState('')
  const handleCreatingDepHeight = (e) => {
   console.log('1111')
   console.log(e.target.value)
   setInputHeight(e.target.value) 
}
const handleCreatingDepLength = (e) => {
  console.log('1111')
  console.log(e.target.value)
  setInputLength(e.target.value) 
}
const handleCreatingDepWidth = (e) => {
  console.log('1111')
  console.log(e.target.value)
  setInputWidth(e.target.value) 
}

  return (
    <>
<div className={style.sizebutton}> 
<p>
  <button style={{width:"300px" ,borderRadius:"25px",height:"50px", marginLeft:"630px",width:"600px",fontSize:"25px"}} className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#sizeButton" aria-expanded="false" aria-controls="sizeButton">
    Размеры
  </button>
</p>
</div>
<div className="collapse" id="sizeButton">
  <div className="card card-body"  >


    <input placeholder="высота..." style={{width: '200px',marginLeft: '45%' }}
      onChange={handleCreatingDepHeight} value ={inputHeight} />
    <input placeholder="ширина..." style={{width: '200px',marginLeft: '45%' }} 
    onChange={handleCreatingDepLength} value ={inputLength} />
    <input placeholder="ширина..." style={{width: '200px',marginLeft: '45%' }}
    onChange={handleCreatingDepWidth} value ={inputWidth}  />


  </div>
</div>
</>
  )
}


export default SizeButton
