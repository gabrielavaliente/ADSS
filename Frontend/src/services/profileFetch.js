import React, { useState, useEffect, useContext } from "react";
import Context from "../context/Usercontext";
const BASE_URL = `${import.meta.env.VITE_API_URL}api/`;


const profileFetch = () => {
  const { jwt } = useContext(Context);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (jwt) {
      fetch(`${import.meta.env.VITE_API_URL}api/auth/whoami`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [jwt]);

  return { userData };
};

export default profileFetch;
