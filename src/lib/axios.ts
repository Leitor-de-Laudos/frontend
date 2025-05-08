import axios from "axios";

export const api =  axios.create({
  baseURL: 'http://localhost:8081',
});

// Adiciona o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);