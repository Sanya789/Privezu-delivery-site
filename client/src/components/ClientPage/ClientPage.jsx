


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


// const params = useParams();
// const dispatch = useDispatch();
// useEffect(()=> {dispatch(getClientFromServer(params.id))},[])
// const currentClient = useSelector(state=>state.currentClient)




  const [image, setImage] = useState('')
  const [imgSrc, setImgSrc] = useState('')

  const currentUser = useSelector(state => state.user)
  // console.log('[[[[[[[[',currentUser.img);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAuthFromServer(currentUser))
  }, [])

  // const handleChange = (e) => {
  //   setImage(e.target.files[0])
  // }
  const handleChange = (e) => {
    // Assuming only image
    const file = e.target.files[0];
    setImage(e.target.files[0])
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImgSrc([reader.result])
    }
    console.log(url) // Would see a path?
    // TODO: concat files
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
  console.log('111',currentUser);
  return (
    <>
  
      <div>

        <h2 style={{color:"green", marginLeft:"800px" ,marginBottom:"40px", marginTop:"40px", fontWeight:"bolder"}}>
          СТРАНИЦА КЛИЕНТА
        </h2>

      </div>
      <div className={style.container}>
        <div className='row'>
          <div className='col'>
<div className={style.listgroup}>

            <ul className="list-group">
              <li style={{height:"40px"}} className="list-group-item">Имя:{currentUser.name}</li>
              <li style={{height:"40px"}} className="list-group-item">Электронная Почта:{currentUser.email}</li>
              <li style={{height:"40px"}} className="list-group-item">Телефон:{currentUser.phone}</li>
              <li style={{height:"40px"}} className="list-group-item">Адрес:</li>

              {/* <a href="#" class="btn btn-success">Edit</a> */}

            </ul>
</div>
            {/* <button style={{margin:"40px", marginLeft:"250px", height:"40px"}} class="btn btn-success">Мои заказы</button> */}
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
                  <input style={{color:"red"}}
                    type="file"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Photo"
                    name="myFile"
                    onChange={handleChange}

                  />
                  <button class="btn btn-success" style={{margin:"20px", marginLeft:"80px"}}>Добавить фото</button>

                </div>
              </div>
            </div>
          </form>



        </div>
        <ClientOrdersList/>
      
     

       
      


    </>
  )
}

export default ClientPage
