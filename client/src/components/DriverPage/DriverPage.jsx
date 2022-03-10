import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthFromServer } from '../../redux/ac/userAC'
import DriverOrdersList from './DriverOrdersList'
import style from './style.module.css'

const DriverPage = () => {
  const [image, setImage] = useState('')
  const currentUser = useSelector(state => state.client)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserAuthFromServer(currentUser))
  }, [])
  const handleChange = (e) => {
    setImage(e.target.files[0])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', image)
    axios.post('/uploadIMG', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }


  return (
    <>
      <div>
        <h2 style={{ color: "green", marginLeft: "800px", marginBottom: "40px", marginTop: "40px", fontWeight: "bolder" }}>
          СТРАНИЦА ВОДИТЕЛЯ
        </h2>
      </div>
      <div>
        <div className={style.container}>
          <div className='row'>
            <div className='col'>
              <div className={style.listgroup}>
                <ul className="list-group">
                  <li style={{ height: "40px" }} className="list-group-item">{currentUser.name}Имя:</li>
                  <li style={{ height: "40px" }} className="list-group-item">{currentUser.email}Электронная Почта:</li>
                  <li style={{ height: "40px" }} className="list-group-item">{currentUser.phone}Телефон:</li>
                  <li style={{ height: "40px" }} className="list-group-item">Рейтинг:</li>
                  <li style={{ height: "40px" }} className="list-group-item">Тип автомобиля:</li>
                  <li style={{ height: "40px" }} className="list-group-item">Водительское удостоверение:</li>
                  <li style={{ height: "40px" }} className="list-group-item">Моё местоположение:</li>
                </ul>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='col'>
              <div className="card" >
                {currentUser.img ?
                  <img style={{ borderRadius: "55px", width: "200px", height: "200px" }} src={`http://localhost:3032/${currentUser.img}`} class="card-img-top" alt="..." /> :
                  <img style={{ borderRadius: "55px", width: "200px", }} src={"http://localhost:3032/img/profile.jpeg"} class="card-img-top" alt="..." />
                }
                <div className="card-body">
                  <input
                    style={{ color: "red" }}
                    type="file"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Photo"
                    name="myFile"
                    onChange={handleChange}
                  />
                  <button class="btn btn-success" style={{ margin: "20px", marginLeft: "80px" }}>Добавить фото</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <DriverOrdersList />
        </div>
      </div>
    </>
  )
}

export default DriverPage
