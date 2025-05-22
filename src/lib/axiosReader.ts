import axios from "axios";

export const apiReader =  axios.create({
  baseURL: 'http://localhost:8080',
});

