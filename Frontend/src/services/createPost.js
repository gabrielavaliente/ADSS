
import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

const createPost = async (postData, jwt) => {
  try {
    const response = await axios.post("/post", postData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  if(response.status===201){
      return response.data;
    }else{
      return 405;
    }
    
  }catch(error){
    console.log(error);
  }
}
export default createPost;
