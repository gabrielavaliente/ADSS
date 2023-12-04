const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;
import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

export const createPost = async (postData, jwt) => {
  try {
    console.log("JWT Token:", jwt);

    const response = await axios.post("/post", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("Response Data:", response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      return 404;
    }
  } catch (error) {
    console.error("Error al crear el post:", error.message);
    console.error("Axios Error Object:", error);
    throw error;
  }
};

export default createPost;
