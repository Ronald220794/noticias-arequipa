import React, {useState, useEffect} from 'react'
import "../components/css/Cards.css";
import logo3 from '../components/images/logo3.png';


export default function Logoimg() {
 

  return (
    <div className="row" id="row_border">
    <a href="http://localhost:3000/">
        <img id="logo_contenedor" 
        alt=""
        /*width={30}
        heigth={30} */
        src={logo3}
        />
    </a>
    </div>
  )
}
