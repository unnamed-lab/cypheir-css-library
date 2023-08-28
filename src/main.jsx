import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import './assets/css/root.css'

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

