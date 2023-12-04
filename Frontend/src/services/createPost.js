import axios from "axios";
import { login } from "./auth"; // Import the login function

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

const createPost = async (postData) => {
  try {
    // Call the login function to obtain the JWT token
    const jwtToken = await login({ identifier: /* username */, password: /* password */ });

    // Use the obtained token for creating the post
    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
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
