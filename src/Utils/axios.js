import axiosLib from "axios";
// 10.0.2.2:8000
const axios = axiosLib.create({
    baseURL:"http://10.0.2.2:8000",
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + localStorage.getItem("token")
    }
})

export default axios;