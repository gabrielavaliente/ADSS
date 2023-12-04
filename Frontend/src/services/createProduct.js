import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;

const createProduct = async (productData, jwt) => {
    if (!jwt) {
        throw new Error("No hay un token JWT válido");
    }

    try {
        const response = await axios.post(`${BASE_URL}product`, productData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error al crear el producto:", error.message);
        throw error;
    }
};

export default createProduct;
