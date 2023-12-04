import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../../services/getProducts';

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        console.log('Datos de productos recibidos:', response);

        if (response.product && Array.isArray(response.product)) {
          setProducts(response.product);
          setLoading(false);
          console.log('Estado de productos después de actualizar:', products);
        } else {
          setError('La propiedad "product" no es un array o está vacía');
          console.error('Error al obtener los productos: La propiedad "product" no es un array o está vacía');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener los productos:', error.message);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar productos: {error}</p>;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <nav className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between space-y-4 lg:space-y-2 lg:space-x-4 p-4 lg:p-2">
        <Link to="/CreateAddMarket">
          <button className="mb-5 w-full lg:w-auto mx-auto shadow appearance-none border rounded py-6 px-8 text-gray-100 bg-[#2F4D55] hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
            Publicar Anuncio
          </button>
        </Link>
      </nav>
    <div className="flex flex-wrap-reverse justify-center">
     
      {products.map((product) => (
        <div key={product._id} className="bg-slate-200 max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4 mb-4">
          <img src={product.img} alt={product.title} 
                  className="w-80 h-auto object-cover rounded-md mb-4"/>
          <p className="text-xl font-semibold mb-2">{product.title}</p>
          <p className="text-lg font-bold text-green-500">Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  </div>
);
      }

export default Marketplace;
