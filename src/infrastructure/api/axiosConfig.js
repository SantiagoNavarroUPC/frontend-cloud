import axios from "axios";

const API_BASE_URL = "http://18.223.196.40:4000/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Tiempo de espera (opcional)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
