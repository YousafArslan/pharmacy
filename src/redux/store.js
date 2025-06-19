import {configureStore} from '@reduxjs/toolkit';
import doctorCategoryReducer from './doctorCategory/doctorCategory.slice';
import doctorDataReducer from './doctorData/doctorData.slice';
import commonReducer from './common/common.slice';
import authReducer from './auth/auth.slice';
import ordersReducer from './orders/orders.slice';
import customersReducer from './customers/customers.slice';
import oilStocksReducer from './oilStocks/oilStocks.slice';
import expensesReducer from './expenses/expenses.slice';
import paymentsReducer from './payments/payments.slice';

export const store = configureStore({
  reducer: {
    doctorCategory: doctorCategoryReducer,
    doctorData: doctorDataReducer,
    auth: authReducer,
    commonReducer :commonReducer,
    orders :ordersReducer,
    customers :customersReducer,
    oilStocks :oilStocksReducer,
    expense :expensesReducer,
    payment :paymentsReducer
  },
});
