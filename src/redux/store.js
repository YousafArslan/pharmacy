import {configureStore} from '@reduxjs/toolkit';
import doctorCategoryReducer from './doctorCategory/doctorCategory.slice';
import doctorDataReducer from './doctorData/doctorData.slice';
import commonReducer from './common/common.slice';
import authReducer from './auth/auth.slice';
import ordersReducer from './orders/orders.slice';
import customersReducer from './customers/customers.slice';
import chequesReducer from './cheques/cheques.slice';
import dssReducer from './dss/dss.slice';
import networkReducer from './network/network.slice';

export const store = configureStore({
  reducer: {
    doctorCategory: doctorCategoryReducer,
    doctorData: doctorDataReducer,
    auth: authReducer,
    commonReducer: commonReducer,
    orders: ordersReducer,
    customers: customersReducer,
    cheques: chequesReducer,
    dss: dssReducer,
    network: networkReducer,
  },
});
