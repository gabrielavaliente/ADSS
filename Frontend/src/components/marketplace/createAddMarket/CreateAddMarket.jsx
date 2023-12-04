import React, { useState, useContext } from 'react';
import createProduct from '../../../services/createProduct';
import UserContext from '../../../context/Usercontext';

function CreateAddMarket() {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    image: '',
    productState: '',
    price: 0,
    contact: '',
  });

  const { jwt } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(productData, jwt);
      console.log('Producto creado correctamente');

    } catch (error) {
      console.error('Error al crear el producto:', error.message);
      alert(`Error al crear el producto: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className="px-4 lg:px-10">
      <h3 className="text-2xl lg:text-4xl font-medium text-[#1F3A44] mb-6 lg:mb-10">
        Crea tu anuncio
      </h3>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
        <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="URL de la imagen"
          />


          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descripción"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Título"
          />

          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Precio"
          />

          <input
            type="url"
            name="contact"
            value={productData.contact}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Número de teléfono (URL Whatsapp)"
          />

          <input
            type="text"
            name="productState"
            value={productData.productState}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Estado del producto"
          />

          <button
            type="submit"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded inline-block py-3 lg:py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
          >
            Publicar anuncio
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddMarket;
