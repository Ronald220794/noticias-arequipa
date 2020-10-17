import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

export default function NoticiasTabla({ noticias, deleteNotic }) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map(
            (
              {
                noticia_titulo,
                noticia_autor,
                noticia_fech,
                noticia_id,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{noticia_titulo.slice(0, 30)} ...</td>
                <td>{noticia_autor} ...</td>
                <td>{noticia_fech}</td>
                <td>
                  <Link to={`/admin/editarnoticia/${noticia_id}`} className="btn btn-outline-info btn-sm mr-2">
                    <i className="fas fa-pen-alt"></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteNotic(noticia_id)}}>
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}