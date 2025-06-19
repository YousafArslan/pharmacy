import {axiosInstance} from '../orders/orders.service';

const getRemainingOils = async req => {
  const data = await axiosInstance.post(`/oil-stocks/remainingOil`, {});
  return data;
};
const getOilStocks = async req => {
  const data = await axiosInstance.post(`/oil-stocks/getAll`, req);
  return data;
};
const createOilTransaction = async req => {
  const data = await axiosInstance.post(`/oil-stocks`, req);
  return data;
};

const oilStocksService = {
  getRemainingOils,
  createOilTransaction,
  getOilStocks
};

export default oilStocksService;
