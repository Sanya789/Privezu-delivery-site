import { useParams } from 'react-router-dom'
import style from './style.module.css'
import { getClientFromServer } from '../../redux/ac/clientAction';
import React, { useEffect, useState } from 'react'
import HeaderClient from '../Header/HeaderClient'
import { getUserAuthFromServer } from '../../redux/ac/userAC'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ClientOrdersList from './ClientOrdersList'


const ClientPage = () => {

  const [image, setImage] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAuthFromServer(currentUser))
  }, [])

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0])
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImgSrc([reader.result])
    }
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
          СТРАНИЦА КЛИЕНТА
        </h2>
      </div>
      <div className={style.container}>
        <div className='row'>
          <div className='col'>
            <div className={style.listgroup}>
              <ul className="list-group">
                <li style={{ height: "40px" }} className="list-group-item">Имя:{currentUser.name}</li>
                <li style={{ height: "40px" }} className="list-group-item">Электронная Почта:{currentUser.email}</li>
                <li style={{ height: "40px" }} className="list-group-item">Телефон:{currentUser.phone}</li>
                <li style={{ height: "40px" }} className="list-group-item">Адрес:</li>
              </ul>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='col'>
            <div class="card" >
              {currentUser.img && imgSrc.length === 0 ?
                <img style={{ borderRadius: "55px", width: "200px", height: "200px" }} src={`http://localhost:3032/${currentUser.img}`} class="card-img-top" alt="..." /> :
                <img style={{ borderRadius: "55px", width: "200px", }} src={imgSrc} class="card-img-top" alt="..." />
              }
              <div class="card-body">
                <input style={{ color: "red" }}
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
      <ClientOrdersList />
    </>
  )
}

export default ClientPage
