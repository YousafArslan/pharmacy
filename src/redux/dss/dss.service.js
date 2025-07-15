import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from '../../../config';
import {axiosInstance} from '../orders/orders.service';

const getDssById = async id => {
  const data = await axiosInstance.get(`${baseUrl}dss/${id}`);
  return data;
};

const getSaleSummaryDetails = async id => {
  const data = await axiosInstance.get(`${baseUrl}dssDetail/${id}`);
  return data;
};

const getOfflineData = async id => {
  const data = await axiosInstance.get(`${baseUrl}offline/${id}`);
  if (data?.status === 200) {
    await AsyncStorage.setItem("offlineData", JSON.stringify(data.data));
  } else {
    throw data.message;
  }
  return data;
};

const dssService = {
  getDssById,
  getSaleSummaryDetails,
  getOfflineData
};

export default dssService;
