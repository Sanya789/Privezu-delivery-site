import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3032'
axios.defaults.withCredentials = true

// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


