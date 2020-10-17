import axios from "axios";

const URL = "https://5f6e1f6860cf97001641bc02.mockapi.io/noticia";

const obtenerNoticias = async () => {
  try {
    let {data} = await axios.get(URL);
    return data;

  } catch (error) {
    return error;
  }
}

const obtenerNoticiasPorId = async (noticia_id) => {
  try {
    let {data} = await axios.get(`${URL}/${noticia_id}`);
    return data;
  } catch (error) {
    return error;
  }
}

const obtenerNoticiasPorTipo = async (noticia_tipo) => {
  try {
    let {data} = await axios.get(`${URL}/${noticia_tipo}`);
    return data;
  } catch (error) {
    return error;
  }
}


const crearNoticia = async (objNoticia) => {
  try{
    let headers = {
      'Content-Type':'application/json'
    }
    let {data} = await axios.post(URL,objNoticia,{headers})
    return data;
  }catch(error){
    return error;
  }
}

const borrarNoticia = async (noticia_id) => {
  try {
    let {data} = await axios.delete(`${URL}/${noticia_id}`);
    return data;
  } catch (error) {
    return error;
  }
} 

const editarNoticia = async (objNoticia, noticia_id) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.put(`${URL}/${noticia_id}`, objNoticia, { headers });
    return data;
  } catch (error) {
    return error;
  }
};
const subirImagen = (imagen, refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen);

    tarea.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      //esto ya nos interesa, aca ya subio la imagen
      () => {
        tarea.snapshot.ref.getDownloadURL()
        .then((urlimagen) => {
          console.log(urlimagen)
          resolve(urlimagen)
        })
        .catch((error) => reject(error))
      }
    );
  });
};

export {
  obtenerNoticias, 
  obtenerNoticiasPorId, 
  obtenerNoticiasPorTipo, 
  crearNoticia,
  borrarNoticia,
  editarNoticia,
  subirImagen
}