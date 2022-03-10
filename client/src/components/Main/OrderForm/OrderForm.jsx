
import DateForm from './DelivForm/DateForm';
import DelivForm from './DelivForm/DelivForm';
import MapButton from './DelivForm/MapButton';
import MassButton from './DelivForm/MassButton';
import SizeButton from './DelivForm/SizeButton';
import VolumeButton from './DelivForm/VolumeButton';
import style from './style.module.css'
import React, { useState } from "react"
import e from 'cors';
import { addOrderDb } from '../../../redux/ac/orderActions';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';






const OrderForm = () => {

  const dispatch = useDispatch()
  const mapForm = useSelector(state => state.coordinateFrom)
  const [inputDepCoord, setInputDepCoord] = useState([])
  const [inputDestCord, setInputDestCoord] = useState([])
  const [inputDepTime, setInputDepTime] = useState('')
  const [inputDestTime, setInputDestTime] = useState('')
  const [inputHeight, setInputHeight] = useState('')
  const [inputLength, setInputLength] = useState('')
  const [inputWidth, setInputWidth] = useState('')
  const [inputMass, setInputMass] = useState('')
  const [inputVol, setInputVol] = useState('')
  const [inputDateTo, setInputDateTo] = useState('')
  const [inputDateFrom, setInputDateFrom] = useState('')


  const handleSubmit = (e) => {
    console.log('submit')

    e.preventDefault()

    dispatch(addOrderDb(inputVol, inputWidth, inputLength, inputHeight, inputDestTime, inputDepTime, inputMass, inputDateFrom, inputDateTo, inputDepCoord, inputDestCord))
  }

  return (
    <>
      <div className={style.orderForm}>
        <form onSubmit={handleSubmit} className="mb-3">
          <DelivForm inputDepTime={inputDepTime} setInputDepTime={setInputDepTime}
            inputDestTime={inputDestTime} setInputDestTime={setInputDestTime}
            inputDepCoord={inputDepCoord} inputDestCord={inputDestCord}
            setInputDepCoord={setInputDepCoord} setInputDestCoord={setInputDestCoord}
          />
          <MapButton />
          <MassButton inputMass={inputMass} setInputMass={setInputMass} />
          <SizeButton inputHeight={inputHeight} setInputHeight={setInputHeight}
            inputLength={inputLength} setInputLength={setInputLength}
            inputWidth={inputWidth} setInputWidth={setInputWidth}
          />
          <VolumeButton inputVol={inputVol} setInputVol={setInputVol} />
          <DateForm inputDateTo={inputDateTo} setInputDateFrom={setInputDateFrom}
            inputDateFrom={inputDateFrom} setInputDateTo={setInputDateTo}
          />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <br />
            <button type="button" type="submit" style={{ borderRadius: "25px", height: "50px", width: "600px", fontSize: "25px" }} className="btn btn-warning">Создать</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default OrderForm
