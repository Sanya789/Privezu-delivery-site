import axios from "axios"

import { SET_USER, GET_USER,ONE_USER  } from "../types/userTypes"




export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value
  }
}

export const getUserAuth = ( data) => {
  return {
    type: GET_USER,
    payload: data
  }
}


export const getUserAuthFromServer = () => async (dispatch) =>{
  const authUser = await axios.get(`http://localhost:3032/user`)
  // console.log('===============>>>>>>>666', authUser.data)
  dispatch(getUserAuth(authUser.data))
}


export const getUser = (input) => async (dispatch) => {
  const res = await axios.post('/user/signup', input)
  dispatch(setUser(res.data.user))
}

export const signUpUser = (input) => async (dispatch) => {
  const res = await axios.post('/user/signin', input)
  // console.log(res.data.user)
  dispatch(setUser(res.data.user))
}

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout')
  dispatch(setUser(null))
}

export const checkUser = () => async (dispatch) => {
  const res = await axios.post('/user/check')
  console.log(res)
  if (res.statusText) {
    dispatch(setUser(res.data.user))
  } else {
    dispatch(setUser(null))
  }
}

export const getOneUser = (value) => {
  return {
    type: ONE_USER,
    payload: value
  }
}

export const getOneUserFromServer = () => async (dispatch) => {
  const res = await axios('/getOneUser')
  dispatch(getOneUser(res.data.getOneUser))
}
