import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import customersService from './customers.service';

const initialState = {
  getAllCustomersError: false,
  getAllCustomersSuccess: false,
  getAllCustomersLoading: false,
  getAllCustomers: null,

  createCustomerError: false,
  createCustomerSuccess: false,
  createCustomerLoading: false,
  createCustomer: null,

  editCustomerError: false,
  editCustomerSuccess: false,
  editCustomerLoading: false,
  editCustomer: null,
};

export const GetAllCustomersAction = createAsyncThunk(
  'customers/getAll',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await customersService.getAllCustomers(data);
      if (response.status === 201) {
        if (moveToNext) {
          moveToNext(response?.data?.message, 'success');
        }
      }
      return response;
    } catch (error) {
      moveToNext(error?.message, 'error');
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
export const CreateCustomerAction = createAsyncThunk(
  'customers/create',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await customersService.createCustomer(data);
      if (response.status === 201) {
        if (moveToNext) {
          moveToNext(response?.data?.message, 'success');
        }
      }
      return response;
    } catch (error) {
      moveToNext(error?.message, 'error');
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const EditCustomerAction = createAsyncThunk(
  'customers/edit',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await customersService.editCustomer(data);

      if (response.status === 200) {
        if (moveToNext) {
          moveToNext(response?.data?.message, 'success');
        }
      }
      return response;
    } catch (error) {
      moveToNext(error?.message, 'error');
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const customersSlice = createSlice({
  name: 'customersReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetAllCustomersAction.pending, state => {
        if (!state.getAllCustomersLoading) {
        state.getAllCustomersLoading = true;
        state.getAllCustomersSuccess = false;
        state.getAllCustomersError = false;
        state.getAllCustomers = null;
        }
      })
      .addCase(GetAllCustomersAction.fulfilled, (state, action) => {
        state.getAllCustomersLoading = false;
        state.getAllCustomersSuccess = true;
        state.getAllCustomersError = false;
        state.getAllCustomers = action.payload.data;
      })
      .addCase(GetAllCustomersAction.rejected, (state, action) => {
        state.getAllCustomersLoading = false;
        state.getAllCustomersSuccess = false;
        state.getAllCustomersError = true;
        state.getAllCustomers = null;
      })
      .addCase(CreateCustomerAction.pending, state => {
        state.createCustomerLoading = true;
        state.createCustomerSuccess = false;
        state.createCustomerError = false;
        state.createCustomer = null;
      })
      .addCase(CreateCustomerAction.fulfilled, (state, action) => {
        state.createCustomerLoading = false;
        state.createCustomerSuccess = true;
        state.createCustomerError = false;
        state.createCustomer = action.payload.data;
      })
      .addCase(CreateCustomerAction.rejected, (state, action) => {
        state.createCustomerLoading = false;
        state.createCustomerSuccess = false;
        state.createCustomerError = true;
        state.createCustomer = null;
      })
      .addCase(EditCustomerAction.pending, state => {
        state.editCustomerLoading = true;
        state.editCustomerSuccess = false;
        state.editCustomerError = false;
        state.editCustomer = null;
      })
      .addCase(EditCustomerAction.fulfilled, (state, action) => {
        state.editCustomerLoading = false;
        state.editCustomerSuccess = true;
        state.editCustomerError = false;
        state.editCustomer = action.payload.data;
      })
      .addCase(EditCustomerAction.rejected, (state, action) => {
        state.editCustomerLoading = false;
        state.editCustomerSuccess = false;
        state.editCustomerError = true;
        state.editCustomer = null;
      })
      ;
  },
});


export default customersSlice.reducer;
