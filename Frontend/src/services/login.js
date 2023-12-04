import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}api`;

export const login = async ({ identifier, password }) => {
  try {
    const response = await axios.post("/auth/login/", { identifier, password });

    if (response.status === 200) {
      // Assuming the server returns a response with a 'jwt' property
      const { jwt } = response.data;

      if (!jwt) {
        throw new Error('Invalid response format: Missing jwt');
      }

      // Decode the jwt to verify its format (optional, but can be useful for debugging)
      const decodedJwt = parseJwt(jwt);
      console.log('Decoded JWT:', decodedJwt);

      return jwt;
    } else {
      // Handle other HTTP statuses indicating unsuccessful login
      throw new Error(`Login failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
};

// Helper function to decode JWT token (for debugging purposes)
const parseJwt = (jwt) => {
  try {
    return JSON.parse(atob(jwt.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export default login;
