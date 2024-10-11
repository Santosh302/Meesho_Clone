import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App.jsx'
import store from './redux/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
  </Provider>
)
