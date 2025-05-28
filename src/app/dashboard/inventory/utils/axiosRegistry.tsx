import axios from 'axios';

const axiosRegistry = axios.create({
  baseURL: 'http://localhost:9091/api/sales',  // Aquí coloca la URL base de tu API
});

export default axiosRegistry;