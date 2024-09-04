import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api", // Replace with your base URL
  withCredentials: true,
});

export default axiosInstance;
