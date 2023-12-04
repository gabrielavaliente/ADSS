import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    console.log('UseEffect is triggered');
    console.log('isLogged:', isLogged);
    console.log('Navigate function:', navigate);
    if (isLogged) navigate('/LandingPage');
  }, [isLogged, navigate]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    login({ identifier, password });
  };
  

  return (
    <section className="flex justify-center items-center h-500">
      <form onSubmit={handleSubmit} className="bg-neutral-100 shadow-lg rounded px-8 sm:px-5 pt-6 sm:pt-3 pb-15 sm:pb-12 mb-4 sm:mb-0 w-96 sm:w-75">
        <input
          type="string"
          placeholder="Username"
          onChange={(e) => setIdentifier(e.target.value)}
          value={identifier}
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="mb-5 shadow appearance-none border rounded w-full py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
        >
          Log in
        </button>
      </form>
    </section>
  );
}

export default Login;
