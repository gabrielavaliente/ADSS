import axios from "axios";

const createPost = async (postData, jwt) => {
  if (!jwt) {
    throw new Error("No hay un token JWT válido");
  }

  try {
    console.log("JWT Token:", jwt);

    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/post`, postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("Response Data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al crear el post:", error.message);
    throw error;
  }
};

export default createPost;
