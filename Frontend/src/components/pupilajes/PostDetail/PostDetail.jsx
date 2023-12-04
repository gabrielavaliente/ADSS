import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import getOnePost from "../../../services/getOnePost";
import UserContext from '../../../context/Usercontext'



function PostDetail() {
  const { postId } = useParams();
  console.log('ID del post:', postId);

  const { jwt } = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getOnePost(postId, jwt);
        console.log('Respuesta de getOnePost:', response);

        setPost(response);

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el post:', error.message);

        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, jwt]);

  if (loading) {
    return <p>Cargando detalles del post...</p>;
  }

  if (error) {
    return <p>Error al cargar detalles del post: {error}</p>;
  }

  if (!post) {
    return <p>No se encontró información del post</p>;
  }

  const deletePost = async () => {
    const success = await deleteOnePost(postId, jwt);

  };


  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
      <img className="w-full h-auto object-cover mb-4" src={post.img} alt={post.title} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-bold mb-2">Descripción:</p>
          <p className="text-gray-700">{post.description}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Precio:</p>
          <p>${post.price}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Agua:</p>
          <p>{post.water}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Electricidad:</p>
          <p>{post.electricity}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Internet:</p>
          <p>{post.internet}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Estado del pupilaje:</p>
          <p>{post.pupilajeState}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Contacto:</p>
          <p>{post.contact}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">Fecha de creación:</p>
          <p>{post.createdAt}</p>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">URL del mapa:</p>
          <p>{post.mapLink}</p>
        </div>


      </div>
    </div>
  );

}
export default PostDetail;
