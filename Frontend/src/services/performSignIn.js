const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`;

function performSignIn({ email, password, username }) {
  console.log("Submitting sign-in form...");

  return fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
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
      return { success: true };
    })
    .catch((error) => {
      console.error("Sign-in error:", error.message);
      throw error;
    });
}

export default performSignIn;
