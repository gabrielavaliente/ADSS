//const ENDPOINT = 'http://localhost:3501/api'
// https://apricot-chameleon-wrap.cyclic.app/
const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;
import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

export const login = async ({identifier,password})=>{
  try{
    const response = await axios.post("/auth/login/",{identifier,password});
    if(response.status===200){
      return response.data;
    }else{
      return 404;
    }
    
  }catch(error){
    console.log(error);
  }
}


export default login;
