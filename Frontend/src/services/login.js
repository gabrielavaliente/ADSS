//const ENDPOINT = 'http://localhost:3501/api'

function login({ identifier, password }) {
  console.log("Submitting login form...");
  return fetch(`${import.meta.env.VITE_API_URL}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  })
    .then((res) => {
      if (!res.ok) {
        console.error("Error:", res.status, res.statusText);
        throw new Error("Response is not good");
      }
      return res.json();
    })
    .then((res) => {
      console.log("Received response:", res);
      const { token } = res;
      console.log("Received JWT:", token);
      return token;
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      throw error;
    });
}

export default login;
