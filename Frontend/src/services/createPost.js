import axios from "axios";
import { login } from "./login.js"; 

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

const createPost = async (postData) => {
  try {
    // Replace with actual values or remove comments
    const jwtToken = await login({ identifier:, password:});

    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      console.error(`Error al crear el post: ${response.status}`);
      return 405;
    }

  } catch (error) {
    console.error("Error al crear el post:", error.message);
    throw error;
  }
};

export default createPost;

