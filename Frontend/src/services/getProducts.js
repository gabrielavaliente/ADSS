const getProducts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/product`);

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage =
        errorResponse.message || "Error desconocido al obtener los productos";
      throw new Error(`Error al obtener los productos: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    throw error;
  }
};

export default getProducts;
