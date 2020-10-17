import React, { useState, useEffect, Fragment } from "react";
import { obtenerNoticiasPorId } from "../services/noticiaService";
/*import '../components/css/DetailView.css';*/
import "../components/css/Cards.css";
/*import { CarritoContext } from "../context/carritoContext";
import Count from "../components/Count";
import Swal from "sweetalert2";  */
import Loading from "../components/Loading"; 

export default function DetailView(props) {
  // console.log("Detalle Props", props)
  const noticiaId = props.match.params.id; //aca obtengo el id de la URL
  //estadoLocal
  const [miNoticia, setMiNoticia] = useState({});
  //const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);

  //Context
  //const { carrito, anadirProducto } = useContext(CarritoContext);
  //console.log("carritoDelContext", carrito);

  const getNoticia = async () => {
    let noticiaObtenido = await obtenerNoticiasPorId(noticiaId);
    // console.log(productoObtenido);
    setMiNoticia(noticiaObtenido);
    setCargando(false);
  };

  /*const anadirAlCarrito = () => {
    let productoAAnadir = {
      producto_id: miProducto.producto_id,
      producto_nombre: miProducto.producto_nombre,
      producto_precio: miProducto.producto_precio,
      producto_cantidad: cantidad,
    };
    anadirProducto(productoAAnadir);

    //alerta de que se añadio el producto con exito
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 2000,
    });   */

  useEffect(() => {
    getNoticia();
  }, []);

  return (
    <Fragment>
      {cargando === true ? (
        <Loading />
      ) : (
      
      <div class="row">
        <div className="col-12 mt-5">
          <p class="h2">{miNoticia.noticia_titulo}</p>
          <p class="h5 my-3">{miNoticia.noticia_resumen}</p>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12" id="colum_1">
          <img
            class="mt-1"
            id="imagen_colum_1"
            src={miNoticia.noticia_imagen}
            alt=""
          />
          <p class="h6 mt-3 text-muted">{miNoticia.noticia_imagen_descrip}</p>
          <p id="border_top"></p>

          <div id="colum_2">
            <div>
              <img
                id="img_autor_colum2"
                src={miNoticia.noticia_autor_img}
                alt=""
              />
            </div>

            <div></div>
            
            <div>
              <p class="h4">{miNoticia.noticia_autor}</p>
              <p class="h5">Informados Arequipa</p>
              <p class="h6 text-muted">informados.arequipa@gmail.com</p>
            </div>
            <div>
              <p class="h6 text-muted">{miNoticia.noticia_fech}</p>
            </div>
          </div>

          <div>
            <p class="font-weight-bold mt-5" id="text_format">{miNoticia.noticia_descripcion_1}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_2}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_3}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_4}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_5}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_6}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_7}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_8}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_9}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_10}</p>
            <p id="text_format">{miNoticia.noticia_descripcion_11}</p>
          </div> 

        </div>
      </div>
       )}
    </Fragment>
  );
}
