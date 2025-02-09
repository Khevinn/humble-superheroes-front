import axios from 'axios';

const defaultApiPort = '3001'
const apiPort = process.env.REACT_APP_API_PORT || defaultApiPort;

const api = axios.create({
  baseURL: apiPort,
});

export default api;
