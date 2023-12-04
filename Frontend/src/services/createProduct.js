const createProduct = async (productData, jwt) => {
    if (!jwt) {
        throw new Error("No hay un token JWT válido");
    }

    try {
        const response = await fetch("http://localhost:3501/api/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorMessage = errorResponse.message || "Error desconocido al crear el producto";
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
