import axios from "axios";
import { baseUrl as url } from "../../../config";
import { store } from "../store";
import { logout } from "../auth/auth.slice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "./navigationService";

export const axiosInstance = axios.create({
  baseURL: url, // Replace with your base URL
});

// Add request interceptor to include the token in the header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.currentUser.token; // Access token from Redux store
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach token to header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  }, // Return response normally if no error
  async (error) => {
    if (error.response && error.status && error.response.status === 401) {
      try {
        // Remove user from AsyncStorage
        await AsyncStorage.removeItem('user');

        // Dispatch logout action
        store.dispatch(logout());
        navigate('Login');
      } catch (err) {
        console.error('Error clearing AsyncStorage:', err);
      }
    }
    return Promise.reject(error); // Reject the error for further handling
  }
);

const getAllOrders = async (req) => {
  const data = await axiosInstance.post(`/orders/getAll`,req);
  return data;
};

const getPendingPaymentOrders = async (req) => {
  const data = await axiosInstance.post(`/orders/pending-payments`,req);
  return data;
};
const getPendingOrders = async () => {
  const data = await axiosInstance.get(`/orders/pendingOrders`);
  return data;
};
const createOrders = async (req) => {
  const data = await axiosInstance.post(`/orders`,req);
  return data;
};
const editOrders = async (req) => {
  const data = await axiosInstance.put(`/orders/${req.id}`,req);
  return data;
};



const ordersService = {
  getAllOrders,
  createOrders,
  editOrders,
  getPendingPaymentOrders,
  getPendingOrders
};

export default ordersService;