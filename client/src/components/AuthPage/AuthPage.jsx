import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../../redux/ac/rolesAC";
import { signUpUser } from "../../redux/ac/userAC";
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

const wordRoles = ['Клиент', 'Экспедитор', 'Админ']

function AuthPage() {
  const [inputs, setInputs] = useState({ email: '', password: '', roleId: '1' });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const inputsHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    dispatch(getRoles())
  }, [])

  useEffect(() => {
    if (user?.roleId === 1) {
      navigate('/client')
    } else if (user?.roleId === 2) {
      navigate('/driver')
    }
  }, [navigate, user])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signUpUser(inputs))
  }


  return (
    <div className={style.auth} >
      <h2 style={{color:"green", margin:"10px", marginLeft:"300px"}}>Войти</h2>
      <form onSubmit={submitHandler}  >
        <div className="card" style={{ width: '18rem' , marginLeft:"140px", width:"400px"}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Эл. почта</label>
                <input type="email" name="email" value={inputs.email} onChange={inputsHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Сохраним в секрете</div>
              </div>
            </li>
            <li>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Пароль</label>
                <input type="password" name="password" value={inputs.password} onChange={inputsHandler} className="form-control" id="exampleInputPassword1" />
              </div>
            </li>
          </ul>
          <button type="submit" className="btn btn-success">Войти</button>
        </div>
      </form>
    </div>
  )
}

export default AuthPage;
