import axiosLib from "axios";
import { getToken } from "../Services/TokenService";
// 10.0.2.2:8000
const axios = axiosLib.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

axios.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
export default axios;