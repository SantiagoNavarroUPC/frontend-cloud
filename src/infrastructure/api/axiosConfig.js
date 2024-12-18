import axios from "axios";

const API_BASE_URL = "http://3.147.68.160:4000/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Tiempo de espera (opcional)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
