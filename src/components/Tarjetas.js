import React, { useState, useEffect } from "react";
//import Tarjeta from './Tarjeta';
import Cardmain from "./Cardmain";
import Cardsecond from "./Cardsecond";
import Cardthird from "./Cardthird";
import { obtenerNoticias } from "../services/noticiaService";
import "../components/css/Cards.css";

export default function Tarjetas() {
  const [noticias_main, setNoticias_main] = useState([]);
  const [noticias_sec, setNoticias_sec] = useState([]);
  const [noticias_ter, setNoticias_ter] = useState([]);

  const getNoticias_main = async () => {
    let data = await obtenerNoticias();

    //let found = data.filter(not => not.noticia_tipo === "1")
    let found_main = data.filter((not) => {
      return not.noticia_tipo === "2";
    });

    // obtener fecha exacta

    console.log(found_main);

    setNoticias_main(found_main);
  };

  const getNoticias_sec = async () => {
    let data = await obtenerNoticias();

    //let found = data.filter(not => not.noticia_tipo === "1")
    let found_sec = data.filter((not) => {
      return not.noticia_tipo === "1"; //&& not.noticia_fech === "Lima, 19 de septiembre del 2020"
    });

    console.log(found_sec);

    setNoticias_sec(found_sec);
  };

  const getNoticias_ter = async () => {
    let data = await obtenerNoticias();

    //let found = data.filter(not => not.noticia_tipo === "1")
    let found_ter = data.filter((not) => {
      return not.noticia_tipo === "3";
    });

    // obtener fecha exacta

    console.log(found_ter);

    setNoticias_ter(found_ter);
  };




  useEffect(() => {
    getNoticias_main();
    getNoticias_sec();
    getNoticias_ter();
  }, []);

  return (
    <div className="row">
      {noticias_main.map((notic, i) => (
        <Cardmain noticia={notic} key={i} />
      ))}
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="second">
        {noticias_sec.map((notic, i) => (
          <Cardsecond noticia={notic} key={i} />
        ))}
      </div>
      {noticias_ter.map((notic, i) => (
        <Cardthird noticia={notic} key={i} />
      ))}




    </div>
  );
}
