import React, { Fragment, useState, useEffect } from "react";
import { obtenerNoticias, borrarNoticia } from "../services/noticiaService";
/*import ProductosTabla from "../components/ProductosTabla";*/
import Loading from "../components/Loading";
/*import Grafico from "../components/Grafico";*/
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import NoticiasTabla from "../components/NoticiasTabla";

export default function DashboardView() {
  const [misNoticias, SetMisNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getNoticias = async () => {
    const noticias = await obtenerNoticias();
    SetMisNoticias(noticias);
    setCargando(false);
  };

  const deleteNotic = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Are you sure??????????",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const noticiaEliminado = await borrarNoticia(id); //borro, va a demorar
      console.log(noticiaEliminado);
      getNoticias();
    });
  };

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div>
          <h1>Dashboard</h1>
          <Link className="btn btn-primary mb-3" to="/admin/crearnoticia">
            Agregar Nueva Noticia
          </Link>
          <NoticiasTabla
            noticias={misNoticias}
            deleteNotic={deleteNotic}
          />
          
        </div>
      )}
    </Fragment>
  );
}