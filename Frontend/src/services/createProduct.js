const createProduct = async (productData, jwt) => {
  try {
    if (!jwt) {
      throw new Error("No hay un token JWT válido");
    }

    // Log JWT Token
    console.log('JWT Token:', jwt);

    const response = await fetch(`${import.meta.env.VITE_API_URL}api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(productData),
    });

    // Log Request and Response
    console.log('Request Headers:', JSON.stringify(response.headers));
    console.log('Request Payload:', JSON.stringify(productData));
    console.log('Response Headers:', JSON.stringify(response.headers));
    console.log('Response Body:', await response.json());

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage =
        errorResponse.message || "Error desconocido al crear el producto";
      throw new Error(`Error al crear el producto: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    throw error;
  }
};

export default createProduct;
