import React, { useState, useContext } from 'react';
import createPost from '../../../services/createPost';
import UserContext from '../../../context/Usercontext';

function CreateAddPupilajes() {
  const [postData, setPostData] = useState({
    hidden: false,
    water: "",
    electricity: "",
    internet: "",
    title: "",
    description: "",
    image: "",
    pupilajeState: "",
    price: 0,
    contact: "",
    mapLink: "",
  });
  const { jwt } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await createPost(postData, jwt);
   
    
    } catch (error) {
      console.error("Error al crear el post:", error.message);

      alert(`Error al crear el post: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setPostData({
      ...postData,
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
            name="title"
            value={postData.title}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Título"
          />

          <input
            type="text"
            name="description"
            value={postData.description}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descripción"
          />

          <input
            type="text"
            name="image"
            value={postData.image}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="URL de la imagen"
          />

          <input
            type="text"
            name="pupilajeState"
            value={postData.pupilajeState}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Estado del pupilaje"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="number"
            name="price"
            value={postData.price}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Precio"
          />

          <input
            type="text"
            name="contact"
            value={postData.contact}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Número de teléfono (URL Whatsapp)"
          />

<input
            type="text"
            name="internet"
            value={postData.internet}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Internet"
          />
           <input
            type="text"
            name="electricity"
            value={postData.electricity}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Electricidad"
          />
           <input
            type="text"
            name="water"
            value={postData.water}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Agua"
          />



          <input
            type="text"
            name="mapLink"
            value={postData.mapLink}
            onChange={handleChange}
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="URL del mapa"
          />
        </div>

        <button
          type="submit"
          className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded inline-block py-3 lg:py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
        >
          Publicar anuncio
        </button>
      </form>
    </div>
  );
}

export default CreateAddPupilajes;
