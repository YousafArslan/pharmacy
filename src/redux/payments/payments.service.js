import {axiosInstance} from '../orders/orders.service';

const createPayments = async req => {
  const data = await axiosInstance.post(`/payments`, req);
  return data;
};
const getordersByPaymentDateRange = async req => {
  const data = await axiosInstance.post(`/payments/ordersByPaymentDateRange`, req);
  return data;
};

const paymentsService = {
  createPayments,
  getordersByPaymentDateRange
};

export default paymentsService;
