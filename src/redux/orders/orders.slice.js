import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ordersService from './orders.service';

const initialState = {
  getAllOrdersError: false,
  getAllOrdersSuccess: false,
  getAllOrdersLoading: false,
  getAllOrders: null,

  getPendingPaymentOrdersError: false,
  getPendingPaymentOrdersSuccess: false,
  getPendingPaymentOrdersLoading: false,
  getPendingPaymentOrders: null,
  
  getPendingOrdersError: false,
  getPendingOrdersSuccess: false,
  getPendingOrdersLoading: false,
  getPendingOrders: null,
  
  createOrdersError: false,
  createOrdersSuccess: false,
  createOrdersLoading: false,
  createOrders: null,

  editOrdersError: false,
  editOrdersSuccess: false,
  editOrdersLoading: false,
  editOrders: null,
};

export const GetAllOrdersAction = createAsyncThunk(
  'orders/getAll',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await ordersService.getAllOrders(data);
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

export const GetPendingPaymentOrdersAction = createAsyncThunk(
  'orders/getPendingPaymentOrders',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await ordersService.getPendingPaymentOrders(data);
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

export const GetPendingOrdersAction = createAsyncThunk(
  'orders/getPendingOrders',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await ordersService.getPendingOrders();
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

export const CreateOrderAction = createAsyncThunk(
  'orders/create',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await ordersService.createOrders(data);
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

export const EditOrderAction = createAsyncThunk(
  'orders/edit',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await ordersService.editOrders(data);

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

export const ordersSlice = createSlice({
  name: 'ordersReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetAllOrdersAction.pending, state => {
        if (!state.getAllOrdersLoading) {
        state.getAllOrdersLoading = true;
        state.getAllOrdersSuccess = false;
        state.getAllOrdersError = false;
        state.getAllOrders = null;
        }
      })
      .addCase(GetAllOrdersAction.fulfilled, (state, action) => {
        state.getAllOrdersLoading = false;
        state.getAllOrdersSuccess = true;
        state.getAllOrdersError = false;
        state.getAllOrders = action.payload.data;
      })
      .addCase(GetAllOrdersAction.rejected, (state, action) => {
        state.getAllOrdersLoading = false;
        state.getAllOrdersSuccess = false;
        state.getAllOrdersError = true;
        state.getAllOrders = null;
      })
      .addCase(GetPendingPaymentOrdersAction.pending, state => {
        if (!state.getPendingPaymentOrdersLoading) {
        state.getPendingPaymentOrdersLoading = true;
        state.getPendingPaymentOrdersSuccess = false;
        state.getPendingPaymentOrdersError = false;
        state.getPendingPaymentOrders = null;
        }
      })
      .addCase(GetPendingPaymentOrdersAction.fulfilled, (state, action) => {
        state.getPendingPaymentOrdersLoading = false;
        state.getPendingPaymentOrdersSuccess = true;
        state.getPendingPaymentOrdersError = false;
        state.getPendingPaymentOrders = action.payload.data;
      })
      .addCase(GetPendingPaymentOrdersAction.rejected, (state, action) => {
        state.getPendingPaymentOrdersLoading = false;
        state.getPendingPaymentOrdersSuccess = false;
        state.getPendingPaymentOrdersError = true;
        state.getPendingPaymentOrders = null;
      })
      .addCase(GetPendingOrdersAction.pending, state => {
        if (!state.getPendingOrdersLoading) {
        state.getPendingOrdersLoading = true;
        state.getPendingOrdersSuccess = false;
        state.getPendingOrdersError = false;
        state.getPendingOrders = null;
        }
      })
      .addCase(GetPendingOrdersAction.fulfilled, (state, action) => {
        state.getPendingOrdersLoading = false;
        state.getPendingOrdersSuccess = true;
        state.getPendingOrdersError = false;
        state.getPendingOrders = action.payload.data;
      })
      .addCase(GetPendingOrdersAction.rejected, (state, action) => {
        state.getPendingOrdersLoading = false;
        state.getPendingOrdersSuccess = false;
        state.getPendingOrdersError = true;
        state.getPendingOrders = null;
      })
      .addCase(CreateOrderAction.pending, state => {
        if (!state.createOrdersLoading) {
        state.createOrdersLoading = true;
        state.createOrdersSuccess = false;
        state.createOrdersError = false;
        state.createOrders = null;
        }
      })
      .addCase(CreateOrderAction.fulfilled, (state, action) => {
        state.createOrdersLoading = false;
        state.createOrdersSuccess = true;
        state.createOrdersError = false;
        state.createOrders = action.payload.data;
      })
      .addCase(CreateOrderAction.rejected, (state, action) => {
        state.createOrdersLoading = false;
        state.createOrdersSuccess = false;
        state.createOrdersError = true;
        state.createOrders = null;
      })
      .addCase(EditOrderAction.pending, state => {
        if (!state.editOrdersLoading) {
        state.editOrdersLoading = true;
        state.editOrdersSuccess = false;
        state.editOrdersError = false;
        state.editOrders = null;
        }
      })
      .addCase(EditOrderAction.fulfilled, (state, action) => {
        state.editOrdersLoading = false;
        state.editOrdersSuccess = true;
        state.editOrdersError = false;
        state.editOrders = action.payload.data;
      })
      .addCase(EditOrderAction.rejected, (state, action) => {
        state.editOrdersLoading = false;
        state.editOrdersSuccess = false;
        state.editOrdersError = true;
        state.editOrders = null;
      });
  },
});


export default ordersSlice.reducer;
