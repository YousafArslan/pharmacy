import { baseUrl } from "../../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from "../orders/orders.service";
import axios from "axios";

/** LOGIN */
const login = async (req) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users/login`, req);
    // backend returns { message, token, user } on success
    if (data?.token && data?.user) {
      await AsyncStorage.setItem('user', JSON.stringify(data));
      return data; // { message, token, user }
    } else {
      // Handle case where response doesn't have token/user
      throw new Error(data?.error || data?.message || "Login failed");
    }
  } catch (error) {
    // Backend returns { error: "message" } on 401 errors
    throw error.response?.data?.error || error.response?.data?.message || error.message;
  }
};

/** REGISTER */
const register = async (req) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users/signup`, req);

    // backend returns newly created user directly
    if (data?.id) {
      return data; // the created user object
    } else {
      throw new Error("User creation failed");
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};


const logout = async () => {
  await AsyncStorage.removeItem('user');
};

const authService = {
  logout,
  login,
  register,
};

export default authService;