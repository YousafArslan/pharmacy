import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import doctorCategoryReducer from './doctorCategory/doctorCategory.slice';
import doctorDataReducer from './doctorData/doctorData.slice';
import commonReducer from './common/common.slice';
import authReducer from './auth/auth.slice';
import ordersReducer from './orders/orders.slice';
import customersReducer from './customers/customers.slice';
import chequesReducer from './cheques/cheques.slice';
import dssReducer from './dss/dss.slice';
import networkReducer from './network/network.slice';

// Persist config for common reducer to save theme preference
const commonPersistConfig = {
  key: 'common',
  storage: AsyncStorage,
  whitelist: ['isDarkMode', 'themeColors', 'colorrdata', 'priceSymbol'], // Only persist these fields
};

const persistedCommonReducer = persistReducer(commonPersistConfig, commonReducer);

export const store = configureStore({
  reducer: {
    doctorCategory: doctorCategoryReducer,
    doctorData: doctorDataReducer,
    auth: authReducer,
    commonReducer: persistedCommonReducer,
    orders: ordersReducer,
    customers: customersReducer,
    cheques: chequesReducer,
    dss: dssReducer,
    network: networkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
