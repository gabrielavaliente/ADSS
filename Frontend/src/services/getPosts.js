const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3501/api/post');
      
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || 'Error desconocido al obtener los productos';
        throw new Error(`Error al obtener los pupilajes: ${errorMessage}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los pupilajes:', error.message);
      throw error;
    }
  };
  
  export default getPosts;
  