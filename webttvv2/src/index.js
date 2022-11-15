import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import "@fortawesome/fontawesome-free/css/all.min.css";
//A ver, si bien son librerias necesarias para MBD no trabajamos con esos estilos asi pues, solo 
//nos interesan los iconos
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";

import Footers from './components/Navbar/Footers';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footers/>
  </React.StrictMode>,
  document.getElementById('root')
)
