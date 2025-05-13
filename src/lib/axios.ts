import axios from "axios";

export const api =  axios.create({
  baseURL: 'https://backendserviceuser.onrender.com',
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