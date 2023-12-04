import axios from "axios";
const BASE_URL = "http://localhost:3501/api/"


//Craer pupilaje
export const createPost = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/post`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      throw new Error(
        "Error occurred while creating the post. Please try again."
      );
    }
  };


  //Encontrar todos los pupilajes
  export const getAllPost = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/post`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };


  // Obtener un pupilaje por id 
export const getOnePost = async (pupilaje_id) => {
    try {
      if (!pupilaje_id) throw new Error("pupilaje_id is required!");
  
      const response = await axios.get(`${BASE_URL}/post/${pupilaje_id}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  // Borrar un pupilaje por id 
  export const deleteOnePost = async (pupilaje_id) => {
    try {
      if (!pupilaje_id) throw new Error("pupilaje_id is required!");
  
      const response = await axios.delete(`${BASE_URL}/post/${pupilaje_id}`);
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };
  
  