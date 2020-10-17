import React from 'react'
/*import FormularioProducto from "../components/FormularioNoticia";*/
import {crearNoticia} from "../services/noticiaService";
import Swal from 'sweetalert2';
import FormularioNoticia from '../components/FormularioNoticia';

export default function CrearNoticiaView() {

  const createNotic = async (objNoticia) => {
    let peticion = await crearNoticia(objNoticia);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Noticia Creado',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }

  return (
    <div>
      <h1>Crear Noticia</h1>
      <FormularioNoticia createNotic={createNotic} textoBoton="Crear Noticia"/>
    </div>
  )
}
