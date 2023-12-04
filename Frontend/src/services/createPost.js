import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;

const createPost = async (postData, jwt) => {
  if (!jwt) {
    throw new Error("No hay un token JWT válido");
  }

  try {
    const response = await axios.post(`${BASE_URL}post`, postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    // Assuming a successful response has a specific property (e.g., success)
    if (response.status === 200) {
      return response.data;
    } else {
      // Handle other response scenarios as needed
      const errorMessage = response.data.message || "Error desconocido al crear el post";
      throw new Error(`Error al crear el post: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error al crear el post:", error.message);
    throw error;
  }
};

export default createPost;
