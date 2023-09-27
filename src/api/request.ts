import axios from 'axios';
import { useStore } from '../store';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = useStore.getState().me.token;
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
