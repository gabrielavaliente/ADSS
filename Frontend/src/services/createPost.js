const createPost = async (postData, jwt) => {
    if (!jwt) {
      throw new Error("No hay un token JWT válido");
    }
  
    try {
      const response = await fetch("http://localhost:3501/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || "Error desconocido al crear el post";
        throw new Error(`Error al crear el post: ${errorMessage}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al crear el post:", error.message);
      throw error;
    }
  };
  
  export default createPost;
  
  