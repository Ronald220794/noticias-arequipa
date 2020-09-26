import React, { useState, useEffect, Fragment } from "react";
import { obtenerNoticiasPorId } from "../services/noticiaService";
import '../components/css/DetailView.css';
/*import { CarritoContext } from "../context/carritoContext";
import Count from "../components/Count";
import Swal from "sweetalert2"; 
import Loading from "../components/Loading"; */

export default function DetailView(props) {
  // console.log("Detalle Props", props)
  const noticiaId = props.match.params.id; //aca obtengo el id de la URL
  //estadoLocal
  const [miNoticia, setMiNoticia] = useState({});
  //const [cantidad, setCantidad] = useState(1);
  /*const [cargando, setCargando] = useState(true); */

  //Context
  //const { carrito, anadirProducto } = useContext(CarritoContext);
  //console.log("carritoDelContext", carrito);

  const getNoticia = async () => {
    let noticiaObtenido = await obtenerNoticiasPorId(noticiaId);
    // console.log(productoObtenido);
    setMiNoticia(noticiaObtenido);
    //setCargando(false);
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
      
        <div class="grid">
            <div class="element0">
              <p></p>
            </div>

            <div class="element1">
              <h1>{miNoticia.noticia_titulo}</h1>
            </div>

            <div class="element2">
              <h2>{miNoticia.noticia_resumen}</h2>
            </div>

            <div class="element3">
              
            </div>

            <div class="element4">
              <img
                src={miNoticia.noticia_imagen}
                alt="..."
                className="img-fluid"
              />
            </div>

            <div class="element5">
              <h3>{miNoticia.noticia_imagen_descrip}</h3>
            </div>

            <div class="element6">
                <div>
                  <img class="img_noticia_autor"
                  src={miNoticia.noticia_autor_img}
                  alt="..."
                  
                  />
                </div>
                <div>
                   <p class="nombre_autor">{miNoticia.noticia_autor}</p>
                   <p class="ps1">Informados Arequipa</p>
                   <p class="ps2">informados.arequipa@gmail.com</p>
                  
                </div>
                <div>
                   <p class="ps1">{miNoticia.noticia_fech}</p>
                   <p class="ps2">{miNoticia.noticia_fech_act}</p>
                </div>
            </div>

            <div class="element7">
              <p class="p_text_1">{miNoticia.noticia_descripcion_1}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_2}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_3}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_4}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_5}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_6}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_7}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_8}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_9}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_10}</p>
              <p class="p_text_2">{miNoticia.noticia_descripcion_11}</p>
            </div>

        </div>
      
    </Fragment>
  )
}
