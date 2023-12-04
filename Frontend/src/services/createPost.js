
const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;
import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

export const createPost = async (postData, jwt) => {
  try{
    const response = await axios.post("/post", postData);
    if(response.status===200){
      return response.data;
    }else{
      return 404;
    }

  }catch(error){
    console.log(error);
  }
}
  
