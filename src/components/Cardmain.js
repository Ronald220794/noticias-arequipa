import React from 'react'
import {Link} from 'react-router-dom';
import '../components/css/Cards.css';


export default function Cardmain({noticia}) {
  // console.log("tarjeta",props)
  
return (
    <div className="col-12 col-sm-12 col-lg-8" id="card_main_first">
      <div className="card_main">
        <img src={noticia.noticia_imagen} className="card-img-top"/>
        <div className="card-body">
          <p class="h5 text-white" /*className="card-title"*/>
            {noticia.noticia_titulo}
          </p>
          <p className="card-text text-white">
            Redacción: {noticia.noticia_autor}
          </p>
          <Link className="btn btn-primary btn-sm" to={`/detalle/${noticia.noticia_id}`}>Detalle</Link>
        </div>
      </div>
    </div>
  )
}
