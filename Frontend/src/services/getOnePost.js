const getOnePost = async (postId, jwt) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api/post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage =
        errorResponse.message || "Error desconocido al obtener el post";
      throw new Error(`Error al obtener el post: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el post:", error.message);
    throw error;
  }
};

export default getOnePost;
