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

