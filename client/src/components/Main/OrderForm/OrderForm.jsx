
import DateForm from './DelivForm/DateForm';
import DelivForm from './DelivForm/DelivForm';
import MapButton from './DelivForm/MapButton';
import MassButton from './DelivForm/MassButton';
import SizeButton from './DelivForm/SizeButton';
import VolumeButton from './DelivForm/VolumeButton';
import HeaderGuest from '../../Header/HeaderGuest';
import style from './style.module.css'
import React, { useState } from "react"
import e from 'cors';
import { addOrderDb } from '../../../redux/ac/orderActions';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';






const OrderForm = () => {

  const dispatch = useDispatch()
  const mapForm = useSelector(state=>state.coordinateFrom)
  console.log('mapForm',mapForm)

  // const [mapFrom,SetInpuMatFrom]= useState(coordinateFrom)

  const [inputDepCoord,setInputDepCoord] = useState([])
  const [inputDestCord,setInputDestCoord] = useState([])
  const [inputDepTime,setInputDepTime] = useState('')
  const [inputDestTime,setInputDestTime] = useState('')
  const [inputHeight,setInputHeight] = useState('')
  const [inputLength,setInputLength] = useState('')
  const [inputWidth,setInputWidth] = useState('')
  const [inputMass,setInputMass] = useState('')
  const [inputVol, setInputVol] = useState('')
  const [inputDateTo,setInputDateTo] = useState('')
  const [inputDateFrom,setInputDateFrom] = useState('')
  // const [formData,setFormData] = useState({inputVol, inputWidth:'',inputLength:'',inputHeight:'',inputDestTime:'',inputDepTime:'',inputMass:'',inputDateFrom:''})
  console.log('inpuDepCoord1',inputDepCoord)
  console.log('inpuDepCoord1',inputDestCord)


const handleSubmit = (e) => {
  console.log('submit')

  e.preventDefault()
  
  // dispatch(addTask(inputValueTitle))
  dispatch(addOrderDb(inputVol, inputWidth,inputLength,inputHeight,inputDestTime,inputDepTime,inputMass,inputDateFrom,inputDateTo,inputDepCoord,inputDestCord))
  // dispatch(addTaskDb(inputValueTitle))
  // if (inputValueTitle) {
  //     addTaskHandler(inputValueTitle)
    }
  // }




  return (
   
   <>
   <div className={style.orderForm}>
    <form onSubmit={handleSubmit}  className="mb-3">
      <DelivForm inputDepTime={inputDepTime} setInputDepTime={setInputDepTime} 
      inputDestTime={inputDestTime}  setInputDestTime={setInputDestTime}
      inputDepCoord={inputDepCoord} inputDestCord={inputDestCord}
      setInputDepCoord={setInputDepCoord}  setInputDestCoord={setInputDestCoord}
      />
      <MapButton />

      <MassButton inputMass={inputMass} setInputMass={setInputMass} />
      <SizeButton  inputHeight={inputHeight} setInputHeight={setInputHeight} 
      inputLength={inputLength} setInputLength={setInputLength} 
      inputWidth={inputWidth} setInputWidth={setInputWidth}
      />
      <VolumeButton inputVol={inputVol} setInputVol={setInputVol} />
      <DateForm inputDateTo={inputDateTo} setInputDateFrom={setInputDateFrom} 
      inputDateFrom={inputDateFrom} setInputDateTo={setInputDateTo}
       />
       <div className={style.orderbutton}>
      <button type="button" style={{borderRadius:"25px",height:"50px", width:"600px",marginLeft:"630px",fontSize:"25px"}} className="btn btn-success">Расчитать</button>
      {/* <h4>Будет сумма</h4> */}
      <br/>
      <button type="button" type="submit"  style={{borderRadius:"25px",height:"50px",width:"600px", marginLeft:"630px",fontSize:"25px"}} className="btn btn-warning">Создать</button>
      </div>
      </form>

</div>
</>
  )
}

{/* <div className={style.orderForm}> */}
export default OrderForm
