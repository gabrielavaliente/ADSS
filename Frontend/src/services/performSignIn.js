import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`;

axios.defaults.baseURL = BASE_URL;

export const performSignIn = async ({ email, password, username }) => {
  console.log("Submitting sign-in form...");

  try {
    const response = await axios.post("/auth/register", {
      email,
      password,
      username,
    });

    console.log("Received response:", response.data);

    // Assuming a successful response has a specific property (e.g., success)
    if (response.data.success) {
      return { success: true };
    } else {
      // Handle other response scenarios as needed
      console.error("Error in response:", response.data);
      throw new Error("Response is not good");
    }
  } catch (error) {
    console.error("Sign-in error:", error.message);
    throw error;
  }
};
