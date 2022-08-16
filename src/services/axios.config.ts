import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://172.21.0.1:3333',
});

export { apiInstance };
