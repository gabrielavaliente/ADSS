import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPosts from "../../services/getPosts";

function Pupilajes() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();

        if (response.pupilaje && Array.isArray(response.pupilaje)) {
          setPosts(response.pupilaje);
          setLoading(false);
        } else {
          setError('La propiedad "pupilaje" no es un array o está vacía');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
   return <p>Cargando detalles del post...</p>;
 }

  if (error) {
    return <p>Error al cargar pupilajes: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between space-y-4 lg:space-y-2 lg:space-x-4 p-4 lg:p-2">
        <Link to="/CreateAddPupilajes">
          <button className="mb-5 w-full lg:w-auto mx-auto shadow appearance-none border rounded py-6 px-8 text-gray-100 bg-[#2F4D55] hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
            Publicar Anuncio
          </button>
        </Link>
      </nav>

      <div className="flex flex-wrap-reverse justify-center">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-slate-200 max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4 mb-4 cursor-pointer"
          >
            <Link to={`/post/${post._id}`}>
              <img
                src={post.img}
                alt={post.title}
                className="w-80 h-auto object-cover rounded-md mb-4"
              />
              <p className="text-xl font-semibold mb-2">{post.title}</p>
              <p className="text-lg font-bold text-green-500">
                Precio: ${post.price} / mes
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pupilajes;
