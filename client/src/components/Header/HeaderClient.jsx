import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getRoles } from '../../redux/ac/rolesAC'
import { useState } from 'react'
import { getOneUserFromServer } from '../../redux/ac/userAC'
import { useEffect } from 'react'
import { userLogout } from '../../redux/ac/userAC'
import { Navigate, useNavigate } from 'react-router-dom'

const navigate = useNavigate
const HeaderClient = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getOneUserFromServer())
  // }, [])
  // console.log("@@@@@@@@@@@@", role);

const clickOut = ()  => {
  dispatch(userLogout())
  navigate('/')
}


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{backgroundColor:"	darkseagreen", height:"60px" , fontSize:"20px"}} className="container-fluid">
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
<div>
  <img src="http://localhost:3032/public/img/logo.jpg"/>
</div>


        {user.roleId === 1 ?
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav">
              <a style={{color: "white"}} className="nav-link active" aria-current="page" href="/">Главная</a>
              <a style={{color: "white"}} className="nav-link active" aria-current="page" href="/client">Личный кабинет</a>

            <a style={{color: "white"}} className="nav-link" onClick={clickOut}href="/" >Выход</a>
            </div>
          </div>
          : user.roleId === 2 ?
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'flex-end' }}>
              <div className="navbar-nav">
                <a style={{color: "white"}} className="nav-link active" aria-current="/" href="/">Главная</a>
                <a style={{color: "white"}} className="nav-link" href="/driver">Найти заказ</a>
                <a style={{color: "white"}} className="nav-link" href="/ActiveOrders">Найти заказ</a>
                <a style={{color: "white"}} className="nav-link" onClick={clickOut} href="/">Выход</a>
              </div>

            </div>
            :
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'flex-end' }}>
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Главная</a>
                <a className="nav-link" href="/register">Зарегистрироваться</a>
                <a className="nav-link" href="/auth">Войти</a>
              </div>


            </div>
        }

      </div>
    </nav>
  )
}


export default HeaderClient
