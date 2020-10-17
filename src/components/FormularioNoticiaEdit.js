import React, { useEffect } from "react";
import { subirImagen } from "../services/noticiaService";
import { storage } from "../config/firebase";
import { useForm } from "react-hook-form";
import {v4 as uuidv4} from "uuid";

let imagenNoticia;

export default function FomularioNoticiadit({
  editNotic,
  noticia,
  textoBoton,
}) {
  let { register, handleSubmit, setValue, errors } = useForm();

  //Con este useEffect obtengo de los props producto y actualizo en los input cada valor correspondiente
  useEffect(() => {
    let {
      noticia_titulo,
      noticia_resumen,
      noticia_tipo,
      noticia_imagen_descrip,
      noticia_autor,
      noticia_fech,
      noticia_descripcion_1,
      noticia_descripcion_2,
      noticia_descripcion_3,
      noticia_descripcion_4,
      noticia_descripcion_5,
      noticia_descripcion_6,
      noticia_descripcion_7,
      noticia_descripcion_8,
      noticia_descripcion_9,
      noticia_descripcion_10,
      noticia_descripcion_11,
    } = noticia;
    setValue("noticia_titulo", noticia_titulo);
    setValue("noticia_resumen", noticia_resumen);
    setValue("noticia_tipo", noticia_tipo);
    setValue("noticia_imagen_descrip", noticia_imagen_descrip);
    setValue("noticia_autor", noticia_autor);
    setValue("noticia_fech", noticia_fech);
    setValue("noticia_descripcion_1", noticia_descripcion_1);
    setValue("noticia_descripcion_2", noticia_descripcion_2);
    setValue("noticia_descripcion_3", noticia_descripcion_3);
    setValue("noticia_descripcion_4", noticia_descripcion_4);
    setValue("noticia_descripcion_5", noticia_descripcion_5);
    setValue("noticia_descripcion_6", noticia_descripcion_6);
    setValue("noticia_descripcion_7", noticia_descripcion_7);
    setValue("noticia_descripcion_8", noticia_descripcion_8);
    setValue("noticia_descripcion_9", noticia_descripcion_9);
    setValue("noticia_descripcion_10", noticia_descripcion_10);
    setValue("noticia_descripcion_11", noticia_descripcion_11);
  }, [noticia]);

  const cambiarNombre = (nombre) => {
    //nombre aleatorio
    let nombreAleatorio = uuidv4();
    //separar
    let separarNombre = nombre.split(".");
    //concatenamos
    let nuevoNombre = `${nombreAleatorio}.${separarNombre[1]}`;
    return nuevoNombre;
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    // console.log(miImagen);
    imagenNoticia = miImagen;
    // console.log("name",imagenProducto.name)
  };

  const manejarSubmit = (data) => {
    //si es que he tocado el componente input y he agregado una imagen, imagenProducto sera diferente de undefined
    if (imagenNoticia !== undefined) {
      let nuevoNombre = cambiarNombre(imagenNoticia.name);
      const refStorage = storage.ref(`noticias/${nuevoNombre}`);
      subirImagen(imagenNoticia, refStorage).then((urlImagen) => {
        console.log(urlImagen);
        // setValue({...value, producto_imagen:urlImagen})
        //despues de que ya subi mi imagen
        editNotic(
          { ...data, noticia_imagen: urlImagen },
          noticia.noticia_id
        ); //mando a editar el Producto
      });
    } else {
        editNotic({ ...data }, noticia.noticia_id); //mando a editar el Producto, pero sin imagen
    }
  };

  return (
    <form onSubmit={handleSubmit(manejarSubmit)}>
      <div className="form-group">
        <label htmlFor="noticia_titulo">Título:</label>
        <input
          type="text"
          className="form-control"
          id="noticia_titulo"
          name="noticia_titulo"
          ref={register({ required: true })}
        />
        {errors.noticia_titulo && errors.noticia_titulo.type === "required" && (
          <small className="text-danger font-weight-bold">
            Titulo es requerido
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="noticia_resumen">Resumen:</label>
        <textarea
          className="form-control"
          id="noticia_resumen"
          name="noticia_resumen"
          ref={register({ required: true })}
        />
        {errors.noticia_resumen &&
          errors.noticia_resumen.type === "required" && (
            <small className="text-danger font-weight-bold">
              Resumen es requerido
            </small>
          )}
      </div>
      <div className="form-group">
        <label htmlFor="noticia_tipo">Tipo:</label>
        <input
          type="text"
          className="form-control"
          id="noticia_tipo"
          name="noticia_tipo"
          ref={register({ required: true })}
        />
        {errors.noticia_tipo && errors.noticia_tipo === "required" && (
          <small className="text-danger font-weight-bold">
            Tipo es requerido
          </small>
        )}
      </div>

      <div className="form-group">
        <label>Imagen</label>
        <input
          type="file"
          onChange={(e) => {
            manejarImagen(e);
          }}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="noticia_imagen_descrip">
          Descripcion de la imagen:
        </label>
        <textarea
          className="form-control"
          id="noticia_imagen_descrip"
          name="noticia_imagen_descrip"
          ref={register({ required: true })}
        />
        {errors.noticia_imagen_descrip &&
          errors.noticia_imagen_descrip.type === "required" && (
            <small className="text-danger font-weight-bold">
              Descripcion es requerido
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_autor">Nombre del autor:</label>
        <input
          type="text"
          className="form-control"
          id="noticia_autor"
          name="noticia_autor"
          ref={register({ required: true })}
        />
        {errors.noticia_autor && errors.noticia_autor.type === "required" && (
          <small className="text-danger font-weight-bold">
            Nombre del autor
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_fech">Fecha:</label>
        <input
          type="date"
          className="form-control"
          id="noticia_fech"
          name="noticia_fech"
          ref={register({ required: true })}
        />
        {errors.noticia_fech && errors.noticia_fech.type === "required" && (
          <small className="text-danger font-weight-bold">
            Fecha de publicación
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_1">Contenido: </label>
        <textarea
          className="form-control"
          id="noticia_descripcion_1"
          name="noticia_descripcion_1"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_1 &&
          errors.noticia_descripcion_1.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_2"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_2"
          name="noticia_descripcion_2"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_2 &&
          errors.noticia_descripcion_2.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_3"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_3"
          name="noticia_descripcion_3"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_3 &&
          errors.noticia_descripcion_3.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_4"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_4"
          name="noticia_descripcion_4"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_4 &&
          errors.noticia_descripcion_4.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_5"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_5"
          name="noticia_descripcion_5"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_5 &&
          errors.noticia_descripcion_5.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_6"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_6"
          name="noticia_descripcion_6"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_6 &&
          errors.noticia_descripcion_6.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_7"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_7"
          name="noticia_descripcion_7"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_7 &&
          errors.noticia_descripcion_7.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_8"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_8"
          name="noticia_descripcion_8"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_8 &&
          errors.noticia_descripcion_8.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_9"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_9"
          name="noticia_descripcion_9"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_9 &&
          errors.noticia_descripcion_9.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_10"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_10"
          name="noticia_descripcion_10"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_10 &&
          errors.noticia_descripcion_10.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>

      <div className="form-group">
        <label htmlFor="noticia_descripcion_11"></label>
        <textarea
          className="form-control"
          id="noticia_descripcion_11"
          name="noticia_descripcion_11"
          ref={register({ required: false })}
        />
        {errors.noticia_descripcion_11 &&
          errors.noticia_descripcion_11.type === "required" && (
            <small className="text-danger font-weight-bold">
              Contenido de la noticia
            </small>
          )}
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
