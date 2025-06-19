import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import paymentsService from './payments.service';

const initialState = {
  createPaymentsError: false,
  createPaymentsSuccess: false,
  createPaymentsLoading: false,
  createPayments: null,

  getordersByPaymentDateError: false,
  getordersByPaymentDateSuccess: false,
  getordersByPaymentDateLoading: false,
  getordersByPaymentDate: null,
};

export const CreatePaymentsAction = createAsyncThunk(
  'payment/create',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await paymentsService.createPayments(data);
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
export const GetOrdersByPaymentDateRangeAction = createAsyncThunk(
  'payment/ordersByPaymentDateRange',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await paymentsService.getordersByPaymentDateRange(data);
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

export const paymentsSlice = createSlice({
  name: 'paymentsReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(CreatePaymentsAction.pending, state => {
        if (!state.createPaymentsLoading) {
          state.createPaymentsLoading = true;
          state.createPaymentsSuccess = false;
          state.createPaymentsError = false;
          state.createPayments = null;
        }
      })
      .addCase(CreatePaymentsAction.fulfilled, (state, action) => {
        state.createPaymentsLoading = false;
        state.createPaymentsSuccess = true;
        state.createPaymentsError = false;
        state.createPayments = action.payload.data;
      })
      .addCase(CreatePaymentsAction.rejected, (state, action) => {
        state.createPaymentsLoading = false;
        state.createPaymentsSuccess = false;
        state.createPaymentsError = true;
        state.createPayments = null;
      })
      .addCase(GetOrdersByPaymentDateRangeAction.pending, state => {
        if (!state.getordersByPaymentDateLoading) {
          state.getordersByPaymentDateLoading = true;
          state.getordersByPaymentDateSuccess = false;
          state.getordersByPaymentDateError = false;
          state.getordersByPaymentDate = null;
        }
      })
      .addCase(GetOrdersByPaymentDateRangeAction.fulfilled, (state, action) => {
        state.getordersByPaymentDateLoading = false;
        state.getordersByPaymentDateSuccess = true;
        state.getordersByPaymentDateError = false;
        state.getordersByPaymentDate = action.payload.data;
      })
      .addCase(GetOrdersByPaymentDateRangeAction.rejected, (state, action) => {
        state.getordersByPaymentDateLoading = false;
        state.getordersByPaymentDateSuccess = false;
        state.getordersByPaymentDateError = true;
        state.getordersByPaymentDate = null;
      })
      ;
  },
});

export default paymentsSlice.reducer;
