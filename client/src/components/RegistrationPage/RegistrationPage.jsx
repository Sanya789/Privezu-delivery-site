import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../../redux/ac/rolesAC";
import { getUser } from "../../redux/ac/userAC";

import style from "./style.module.css"

import { useNavigate } from 'react-router-dom'


const wordRoles = ['Клиент','Экспедитор','Админ']
function RegistrationPage() {
  const [inputs, setInputs] = useState({name:'', email:'', phone:'', password:'',roleId:1})


const navigate = useNavigate()


const dispatch = useDispatch();
const roles = useSelector(state => state.roles)

const inputHandler = (e) => {
  setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
}

useEffect(() => {
dispatch(getRoles())
// navigate('/')
}, [])




const submitHandler = (e) => {
  e.preventDefault()
  dispatch(getUser(inputs))
  setInputs({name:'', email:'', phone:'', password:'',roleId:1})

navigate('/')


}

  return (
    <div className={style.registration}>
      <h2 style={{color:"green", margin:"10px", marginLeft:"200px"}}>Зарегистрироваться</h2>
      <form onSubmit={submitHandler}>
        <div className="card" style={{ width: '18rem' , marginLeft:"140px", width:"400px"}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Имя</label>
                <input type="text" onChange={inputHandler} value={inputs.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </li>
            <li className="list-group-item">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Телефон</label>
                <input type="text" onChange={inputHandler} name="phone" value={inputs.phone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </li>
            <li className="list-group-item">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Эл. почта</label>
                <input onChange={inputHandler} value={inputs.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp"    className="form-text">Сохраним в секрете</div>
              </div>
            </li>
            <div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Пароль</label>
                <input type="password" onChange={inputHandler} value={inputs.password} name="password" className="form-control" id="exampleInputPassword1" />
              </div>
            </div>
            <div>
              <select className="form-select" name='roleId' onChange={inputHandler} value={inputs.roleId} aria-label="Default select example">
                {roles.map(el => <option  value={el.role}>{wordRoles[el.role-1]}</option>)}
              </select>
            </div>
          </ul>
          <button  type="submit" className="btn btn-success">Зарегистрироваться</button>


         

        </div>
      </form>
    </div>
  )
}

export default RegistrationPage
