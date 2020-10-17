import React, {useEffect, useState} from 'react'
import FormularioNoticiaEdit from "../components/FormularioNoticiaEdit";
import {obtenerNoticiasPorId, editarNoticia} from "../services/noticiaService";
import Swal from 'sweetalert2';

export default function EditarNoticiaView(props) {

  const [noticia, setNoticia] = useState({})
  const noticiaId = props.match.params.id;

  useEffect(async ()=>{
    let NoticiaObtenido = await obtenerNoticiasPorId(noticiaId);
    setNoticia(NoticiaObtenido)
  },[])

  const editNotic = async (objNoticia, id) => {
    let peticionEditar = await editarNoticia(objNoticia, id)
    Swal.fire({
      icon:"success",
      title:"Exito!",
      text:"Producto Editado Exitosamente"
    })
  }

  return (
    <div>
      <h1>Crear Noticia</h1>
      <FormularioNoticiaEdit noticia={noticia} editNotic={editNotic} textoBoton="Editar Noticia"/>
    </div>
  )
} 
