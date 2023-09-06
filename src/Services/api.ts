import axios from "axios";

const api = axios.create({
  // baseURL: "https://motorsm6.onrender.com",
  baseURL: "http://localhost:3000",
  timeout: 6000,
});

const apiFipe = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 6000,
});

const apiLocal = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 6000,
});

export { api, apiFipe, apiLocal };
