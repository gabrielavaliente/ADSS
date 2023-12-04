const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;
import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

const createPost = async (postData, jwt) => {
  if (!jwt) {
    throw new Error("No hay un token JWT válido");
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/post`, postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    // Axios automatically checks for response.ok, so you can simplify the code
    return response.data;
  } catch (error) {
    console.error("Error al crear el post:", error.message);
    throw error;
  }
};

export default createPost;
