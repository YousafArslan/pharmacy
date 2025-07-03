import { baseUrl } from "../../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from "../orders/orders.service";

const login = async (req) => {
  const data = await axiosInstance.post(`${baseUrl}users/login`, req);
  if (data?.status === 200) {
    await AsyncStorage.setItem("user", JSON.stringify(data.data));
  } else {
    throw data.message;
  }
  return data;
};

const checkEmail = async req => {
  const data = await axiosInstance.post(
    `${baseUrl}Login/CheckEmail?Email=${req.email}`,
  );
  if (data?.data?.succeeded) {
    // localStorage.setItem("glare_ecom", JSON.stringify(data?.data?.data));
  } else {
    throw data.message;
  }
  return data;
};

const resetPassword = async req => {
  // const data = await api.post("/Login/login", req);
  // const data = await axios.post(`${baseUrl}/Login/login`, req);
  const data = await axiosInstance.post(
    `${baseUrl}Login/UpdatePassword?Email=${req.email}&Password=${req.password}`,
  );
  if (data?.data?.succeeded) {
    localStorage.setItem('glare_ecom', JSON.stringify(data?.token));
  } else {
    throw data.message;
  }
  return data;
};

const register = async (req) => {

  // const { data } = await api.post(`/Users/create`, req);
  // const { data } = await api.post(`${baseUrl}/Users/create`, req);
  const { data } = await api.post(`${baseUrl}Users/create`, req);
  if (data?.succeeded) {
    return data.data;
  } else throw data.message;
};

const logout = () => {
  localStorage.removeItem("glare_ecom");
};

const authService = {
  logout,
  login,
  register,
  checkEmail,
  resetPassword
};

export default authService;