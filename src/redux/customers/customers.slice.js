import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customersService from './customers.service';
import { getErrorMessage, createAsyncState, createAsyncReducers, resetAsyncState } from '../utils/asyncThunkHelper';

/**
 * Initial state with structured async operations
 */
const initialState = {
  list: createAsyncState([]),
  create: createAsyncState(null),
  update: createAsyncState(null),
};

/**
 * Fetch all customers
 */
export const fetchCustomers = createAsyncThunk(
  'customers/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await customersService.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Create a new customer
 */
export const createCustomer = createAsyncThunk(
  'customers/create',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await customersService.create(customerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Update an existing customer
 */
export const updateCustomer = createAsyncThunk(
  'customers/update',
  async ({ id, ...customerData }, { rejectWithValue }) => {
    try {
      const response = await customersService.update(id, customerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Customers slice
 */
const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    resetCreateState: (state) => resetAsyncState(state, 'create'),
    resetUpdateState: (state) => resetAsyncState(state, 'update'),
    resetAllCustomerStates: () => initialState,
  },
  extraReducers: (builder) => {
    createAsyncReducers(builder, fetchCustomers, 'list');
    createAsyncReducers(builder, createCustomer, 'create');
    createAsyncReducers(builder, updateCustomer, 'update');
  },
});

export const { resetCreateState, resetUpdateState, resetAllCustomerStates } = customersSlice.actions;
export default customersSlice.reducer;
