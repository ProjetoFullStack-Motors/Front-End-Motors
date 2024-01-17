import axios from 'axios'

const api = axios.create({
  baseURL: 'https://back-end-motors-api.onrender.com',
  timeout: 20000,
})

const apiFipe = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 6000,
})

const apiLocal = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 6000,
})

export { api, apiFipe, apiLocal }
