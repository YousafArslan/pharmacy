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

const dssService = {
  getDssById,
  getSaleSummaryDetails
};

export default dssService;
