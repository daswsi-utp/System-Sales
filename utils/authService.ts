import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090'; // tu backend o gateway

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // <--- IMPORTANTE para enviar cookies HttpOnly
});

export async function login(email: string, password: string) {
  const response = await api.post('/login', { email, password });
  return response.data;
}

export async function logout() {
  await api.post('/logout');
  localStorage.removeItem('access_token'); // si usas también localStorage
}

export function saveToken(token: string) {
  localStorage.setItem('access_token', token);
}

export function getToken() {
  return localStorage.getItem('access_token');
}
