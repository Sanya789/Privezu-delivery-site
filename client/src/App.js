
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderClient from './components/Header/HeaderClient';
import HeaderDriver from './components/Header/HeaderDriver';
import HeaderGuest from './components/Header/HeaderGuest';
import OrderForm from './components/Main/OrderForm/OrderForm';

import ClientPage from './components/ClientPage/ClientPage';
import DriverPage from './components/DriverPage/DriverPage';

import MyOrderPage from './components/MyOrderPage/MyOrderPage';

import AuthPage from './components/AuthPage/AuthPage';
import OrderPage from './components/OrderPage/OrderPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

import AllOrdersPage from './components/AllOrdersPage/AllOrdersPage';
import Chat from './components/Chat/Chat';
import { io } from 'socket.io-client'
// const et = io.connect("http://localhost:3032")

import { useDispatch } from 'react-redux';
import { checkUser } from './redux/ac/userAC';
import { useEffect } from 'react';
const socket = io.connect("http://localhost:3033")



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, [])
  return (
    <>
      <HeaderClient />
      {/* <HeaderDriver />
      <HeaderGuest /> */}

      <Routes>
        <Route path='/chat' element={<Chat />} />
        <Route path='/' element={<OrderForm />} />
        <Route path='/order' element={<MyOrderPage />} />
        <Route path='/client' element={<ClientPage />} />
        <Route path='/driver' element={<DriverPage />} />
        <Route path='/orders/:id' element={<OrderPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/ActiveOrders' element={<AllOrdersPage />} />
      </Routes>
      
</>

   
  );
}

export default App;
