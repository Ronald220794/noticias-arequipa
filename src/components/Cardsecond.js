import React from "react";
import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import "../components/css/Cards.css";
import Image from 'react-bootstrap/Image';

export default function Cardsecond({ noticia }) {
  // console.log("tarjeta",props)

  return (
    <div id="card_second">
      <Media>
        <Media.Body>
          <p class="h6">{noticia.noticia_titulo}</p>
          <small class="text-muted">{noticia.noticia_autor}</small>   
           
        </Media.Body>
        
        <Image
          id="img_second"
          /*width={80}
          height={80}*/
          src={noticia.noticia_imagen}  
          alt="Generic placeholder"
        />
      </Media>
    </div>
  );
}
