import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8093/api/products',  // Aquí coloca la URL base de tu API
});

export default axiosInstance;