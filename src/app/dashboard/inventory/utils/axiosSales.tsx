
import axios from 'axios';

const axiosSales = axios.create({
  baseURL: 'http://localhost:9090/api/sales',  // Aquí coloca la URL base de tu API
});

export default axiosSales;