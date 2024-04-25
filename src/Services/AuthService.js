import axios from "../Utils/axios";
import { getToken, setToken } from "./TokenService";
export const login = async (credentials) => {
    const { data } = await axios.post("api/users/login", credentials);
    await setToken(data.token);
}
export const loadUser = async () => {
    try {
        const token = await getToken();

        const { data } = await axios.get("api/v1/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
        console.log("User data:", data);
        return data.user;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized access:", error);
          } else {
            console.error("Error loading user:", error);
          }
          throw error;
    }
};

export const logout = async () => {
    try {
        const token = await getToken();
        console.log("logging out " + token);
        await axios.post("api/v1/users/logout", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        await setToken(null);
        console.log("Token cleared");
    } catch (error) {
        console.error("Error logging out:", error);
    }

    
    console.log(getToken());
}
