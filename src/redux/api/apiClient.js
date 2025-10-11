import axios from 'axios';
import { baseUrl } from '../../../config';
import { store } from '../store';
import { logout } from '../auth/auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../orders/navigationService';

/**
 * Centralized API client with authentication and error handling
 */
export const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authentication token
apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth?.currentUser?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Clear user data and logout on authentication errors
      try {
        await AsyncStorage.removeItem('user');
        store.dispatch(logout());
        navigate('Login');
      } catch (err) {
        console.error('Error clearing AsyncStorage:', err);
      }
    }
    return Promise.reject(error);
  }
);

/**
 * Helper for GET requests
 */
export const get = (url, config) => apiClient.get(url, config);

/**
 * Helper for POST requests
 */
export const post = (url, data, config) => apiClient.post(url, data, config);

/**
 * Helper for PUT requests
 */
export const put = (url, data, config) => apiClient.put(url, data, config);

/**
 * Helper for DELETE requests
 */
export const deleteRequest = (url, config) => apiClient.delete(url, config);

export default apiClient;
