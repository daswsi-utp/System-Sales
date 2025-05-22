// src/utils/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8090/api/products',  // Aquí coloca la URL base de tu API
});

export default axiosInstance;
