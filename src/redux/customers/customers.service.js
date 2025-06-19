import { axiosInstance } from "../orders/orders.service";

const getAllCustomers = async (req) => {
  const data = await axiosInstance.get(`/customers`,{});
  return data;
};
const createCustomer = async (req) => {
  const data = await axiosInstance.post(`/customers`,req);
  return data;
};

const editCustomer = async (req) => {
  const data = await axiosInstance.put(`/customers/${req.id}`,req);
  return data;
};

const customersService = {
  getAllCustomers,
  createCustomer,
  editCustomer
};

export default customersService;