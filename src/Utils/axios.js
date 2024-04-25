import axiosLib from "axios";
// 10.0.2.2:8000
const axios = axiosLib.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

export default axios;