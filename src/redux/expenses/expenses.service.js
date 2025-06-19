import {axiosInstance} from '../orders/orders.service';


const getAllExpenses = async req => {
  const data = await axiosInstance.post(`/expenses/getAll`, req);
  return data;
};
const getExpensesWithTotal = async req => {
  const data = await axiosInstance.post(`/expenses/getExpensesWithTotal`, req);
  return data;
};

const createExpenses = async req => {
  const data = await axiosInstance.post(`/expenses`, req);
  return data;
};

const editExpenses = async req => {
  const data = await axiosInstance.put(`/expenses/${req.id}`, req);
  return data;
};

const expensesService = {
  getAllExpenses,
  createExpenses,
  editExpenses,
  getExpensesWithTotal
};

export default expensesService;
