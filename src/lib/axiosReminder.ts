import axios from "axios";

export const apiReminder =  axios.create({
  baseURL: 'http://localhost:8082',
});

