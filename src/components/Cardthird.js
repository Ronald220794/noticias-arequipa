import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Cards.css";

export default function Cardthird({ noticia }) {
  // console.log("tarjeta",props)

  return (
    <div className="col-sm-12 col-md-6 col-lg-4" id="card_main_first">
      <Link to={`/detalle/${noticia.noticia_id}`}>
      <div id="card_main_third">
        <img
          id="img_third"
          src={noticia.noticia_imagen}
          alt=""
          /*className="card-img-top_third"*/
        />
        <div className="card-body_third">
          <p class="h6 mt-3" id="titulo_autor_1">
            {noticia.noticia_titulo}
          </p>
          <p className="card-text" class="text-muted">{noticia.noticia_autor}</p>
          
        </div>
      </div>
      </Link>
    </div>
  );
}
