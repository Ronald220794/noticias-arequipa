import React from 'react'
import {Link} from 'react-router-dom';

export default function Tarjeta({noticia}) {
  // console.log("tarjeta",props)
  return (
    <div className="col-12 col-lg-6 col-xl-3">
      <div className="card">
        <img src={noticia.noticia_imagen} className="card-img-top"/>
        <div className="card-body">
          <h3 className="card-title">
            {noticia.noticia_titulo}
          </h3>
          <p className="card-text">
            Redacción: {noticia.noticia_autor}
          </p>
          <Link className="btn btn-primary btn-sm" to={`/detalle/${noticia.noticia_id}`}>Detalle</Link>
        </div>
      </div>
    </div>
  )
}
