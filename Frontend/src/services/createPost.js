import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

export const createPost = async (postData, jwt) => {
  try {
    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      // Success status code (2xx range)
      return response.data;
    } else {
      // Handle non-success status code
      return 405; // You may want to handle this differently based on your requirements
    }

  } catch (error) {
    console.log(error);
    // You might want to throw the error here to propagate it to the calling code
    throw error;
  }
}

export default createPost;
