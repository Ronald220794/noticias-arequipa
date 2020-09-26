import React, {useState, useEffect} from 'react'
import Tarjeta from './Tarjeta';
import {obtenerNoticias} from '../services/noticiaService';

export default function Tarjetas() {

  const [noticias, setNoticias] = useState([])

  const getNoticias = async () => {
    let data = await obtenerNoticias()
    // console.log(data)
    setNoticias(data)
  }

  useEffect(()=>{
    getNoticias();
  },[])

  return (
    <div className="row">
      {
        noticias.map((notic, i) => (
          <Tarjeta noticia={notic} key={i}/>
        ))
      }
    </div>
  )
}
