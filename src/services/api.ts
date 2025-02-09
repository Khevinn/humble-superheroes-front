import axios from 'axios';

const apiPort = process.env.REACT_APP_API_PORT;

const api = axios.create({
  baseURL: apiPort,
});

export default api;
