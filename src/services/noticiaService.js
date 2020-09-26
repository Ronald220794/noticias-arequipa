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

/*const crearProducto = async (objProducto) => {
  try{
    let headers = {
      'Content-Type':'application/json'
    }
    let {data} = await axios.post(URL,objProducto,{headers})
    return data;
  }catch(error){
    return error;
  }
}

const borrarProducto = async (prod_id) => {
  try {
    let {data} = await axios.delete(`${URL}/${prod_id}`);
    return data;
  } catch (error) {
    return error;
  }
} */

export {obtenerNoticias, obtenerNoticiasPorId}