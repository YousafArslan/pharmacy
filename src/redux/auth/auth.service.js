import { baseUrl } from "../../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from "../orders/orders.service";
import axios from "axios";

const login = async req => {
  const data = await axios.post(`${baseUrl}/users/login`, req);
  if (data?.status === 200) {
    await AsyncStorage.setItem('user', JSON.stringify(data.data));
  } else {
    throw data.message;
  }
  return data;
};

const register = async req => {
  const {data} = await axios.post(`${baseUrl}/users/signup`, req);
  if (data?.succeeded) {
    return data.data;
  } else throw data.message;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  logout,
  login,
  register,
};

export default authService;