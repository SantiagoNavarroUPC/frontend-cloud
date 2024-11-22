import axios from "axios";

const API_BASE_URL = "https://apimocha.com/cloud-api/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Tiempo de espera (opcional)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
