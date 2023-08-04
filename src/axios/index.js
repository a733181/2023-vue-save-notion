// 預設 axios 設定
import axios from 'axios';
import useAuthStore from '@/stores/auth/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API, // replace with your environment variable name
  headers: {
    // 設定預設的 Content-Type 為 JSON
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  config.headers.token = authStore.token;

  return config;
});

export default api;
