import axios from "../Utils/axios";
import { setToken } from "./TokenService";
export const loginUser = async (credentials) => {
    const { data } = await axios.post("api/users/login", credentials);
    await setToken(data.token);
}
export const registerUser = async (userData) => {
        const { data } = await axios.post("api/users/register", userData);
        if (!data || !data.token) {
            throw new Error("Invalid response from server.");
          }
          
        await setToken(data.token);
        return data.message;
};
export const loadUser = async () => {
    try {
        const { data } = await axios.get("api/v1/users/me");
        return data.user;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.warn("Unauthorized access:", error);
          } else {
            console.error("Error loading user:", error);
          }
          throw error;
    }
};

export const logout = async () => {
    try {
        await axios.post("api/v1/users/logout", {});
        await setToken(null);
        console.info("LOGOUT: Token cleared");
    } catch (error) {
        console.error("Error logging out:", error);
    }
}
