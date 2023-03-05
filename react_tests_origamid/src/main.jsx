import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Arrays } from './Arrays'
import { Products } from './Products'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Arrays />
    <Products />
  </React.StrictMode>,
)
