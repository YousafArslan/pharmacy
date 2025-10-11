import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ordersService from './orders.service';
import { getErrorMessage, createAsyncState, createAsyncReducers, resetAsyncState } from '../utils/asyncThunkHelper';

/**
 * Initial state with structured async operations
 */
const initialState = {
  all: createAsyncState([]),
  pendingPayments: createAsyncState([]),
  pending: createAsyncState([]),
  create: createAsyncState(null),
  update: createAsyncState(null),
};

/**
 * Fetch all orders
 */
export const fetchAllOrders = createAsyncThunk(
  'orders/fetchAll',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await ordersService.getAll(filters);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Fetch orders with pending payments
 */
export const fetchPendingPaymentOrders = createAsyncThunk(
  'orders/fetchPendingPayments',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await ordersService.getPendingPayments(filters);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Fetch pending orders
 */
export const fetchPendingOrders = createAsyncThunk(
  'orders/fetchPending',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ordersService.getPending();
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Create a new order
 */
export const createOrder = createAsyncThunk(
  'orders/create',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await ordersService.create(orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Update an existing order
 */
export const updateOrder = createAsyncThunk(
  'orders/update',
  async ({ id, ...orderData }, { rejectWithValue }) => {
    try {
      const response = await ordersService.update(id, orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Orders slice
 */
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetCreateState: (state) => resetAsyncState(state, 'create'),
    resetUpdateState: (state) => resetAsyncState(state, 'update'),
    resetAllOrdersStates: () => initialState,
  },
  extraReducers: (builder) => {
    createAsyncReducers(builder, fetchAllOrders, 'all');
    createAsyncReducers(builder, fetchPendingPaymentOrders, 'pendingPayments');
    createAsyncReducers(builder, fetchPendingOrders, 'pending');
    createAsyncReducers(builder, createOrder, 'create');
    createAsyncReducers(builder, updateOrder, 'update');
  },
});

export const { resetCreateState, resetUpdateState, resetAllOrdersStates } = ordersSlice.actions;
export default ordersSlice.reducer;
