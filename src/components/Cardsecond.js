import React from "react";
import { Link } from "react-router-dom";
/*import Media from "react-bootstrap/Media";*/
import "../components/css/Cards.css";
import Image from 'react-bootstrap/Image';

export default function Cardsecond({ noticia }) {
  // console.log("tarjeta",props)

  return (
  <Link  to={`/detalle/${noticia.noticia_id}`}> 

    <div id="card_second">
      <div></div>

      <div id="titulo_autor">
          <p class="h6" id="titulo_autor_1">{noticia.noticia_titulo}</p>
          <small class="text-muted">{noticia.noticia_autor}</small>       
      </div>

      <div></div>

      <div id="imagen_second_contenedor">
        <img
          id="img_second"
          /*width={80}
          height={80}*/
          src={noticia.noticia_imagen}  
          alt=""
        />
      </div>
      <div></div>
    </div>
    </Link>
  );
}