import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import performSignIn from "../../../services/performSignIn";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState("");
  const navigate = useNavigate();
  const { isLogged, login } = useUser();

  useEffect(() => {

    if (isLogged) {
      navigate('/Login');
      showMessage("Usuario registrado");
    }
  }, [isLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await performSignIn({ email, password, username });

      if (result.success) {
        login({ identifier: email, password });
      } else {
        console.error("Unexpected server response:", result);
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const showMessage = (text) => {
    setMessage(text);
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
      setMessage("");
    }, 3000);
  };

  return (
    <section className="flex justify-center items-center h-500">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-100 shadow-lg rounded px-8 sm:px-5 pt-6 sm:pt-3 pb-15 sm:pb-12 mb-4 sm:mb-0 w-96 sm:w-75"
      >
       <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />


        <button
          type="submit"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
        >
          Sign In
        </button>

        {isMessageVisible && (
          <div className="bg-green-200 text-green-800 p-3 rounded mt-2">
            {message}
          </div>
        )}
      </form>
    </section>
  );
}

export default Signin;

      


