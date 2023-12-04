import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api`;

const createPost = async (postData, jwt) => {
  try {
    console.log("JWT Token:", jwt);
    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    // Axios lanzará una excepción si la respuesta no es satisfactoria
    // Así que no necesitas verificar manualmente el código de estado aquí

    // No es necesario llamar a response.data, ya que Axios ya lo hace automáticamente
    return response.data;

  } catch (error) {
    console.error("Error al crear el post:", error.message);
    throw error; // Puedes lanzar el error nuevamente para que la función llamadora pueda manejarlo si es necesario
  }
};

export default createPost;

