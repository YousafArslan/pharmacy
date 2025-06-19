import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import oilStocksService from './oilStocks.service';

const initialState = {
  getRemainingOilError: false,
  getRemainingOilSuccess: false,
  getRemainingOilLoading: false,
  getRemainingOil: null,
 
  getOilStocksError: false,
  getOilStocksSuccess: false,
  getOilStocksLoading: false,
  getOilStocks: null,
 
  createOilTransactionError: false,
  createOilTransactionSuccess: false,
  createOilTransactionLoading: false,
  createOilTransaction: null,
};

export const GetRemainingOilAction = createAsyncThunk(
  'oilStocks/getRemainingOil',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await oilStocksService.getRemainingOils(data);
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
export const GetOilStocksAction = createAsyncThunk(
  'oilStocks/getOilStocksAction',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await oilStocksService.getOilStocks(data);
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

export const CreateOilTransactionAction = createAsyncThunk(
  'oilStocks/createOilTransaction',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await oilStocksService.createOilTransaction(data);
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

export const oilStocksSlice = createSlice({
  name: 'oilStocksReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetRemainingOilAction.pending, state => {
        if (!state.getRemainingOilLoading) {
        state.getRemainingOilLoading = true;
        state.getRemainingOilSuccess = false;
        state.getRemainingOilError = false;
        state.getRemainingOil = null;
        }
      })
      .addCase(GetRemainingOilAction.fulfilled, (state, action) => {
        state.getRemainingOilLoading = false;
        state.getRemainingOilSuccess = true;
        state.getRemainingOilError = false;
        state.getRemainingOil = action.payload.data;
      })
      .addCase(GetRemainingOilAction.rejected, (state, action) => {
        state.getRemainingOilLoading = false;
        state.getRemainingOilSuccess = false;
        state.getRemainingOilError = true;
        state.getRemainingOil = null;
      })
      .addCase(GetOilStocksAction.pending, state => {
        if (!state.getOilStocksLoading) {
        state.getOilStocksLoading = true;
        state.getOilStocksSuccess = false;
        state.getOilStocksError = false;
        state.getOilStocks = null;
        }
      })
      .addCase(GetOilStocksAction.fulfilled, (state, action) => {
        state.getOilStocksLoading = false;
        state.getOilStocksSuccess = true;
        state.getOilStocksError = false;
        state.getOilStocks = action.payload.data;
      })
      .addCase(GetOilStocksAction.rejected, (state, action) => {
        state.getOilStocksLoading = false;
        state.getOilStocksSuccess = false;
        state.getOilStocksError = true;
        state.getOilStocks = null;
      })
      .addCase(CreateOilTransactionAction.pending, state => {
        if (!state.createOilTransactionLoading) {
        state.createOilTransactionLoading = true;
        state.createOilTransactionSuccess = false;
        state.createOilTransactionError = false;
        state.createOilTransaction = null;
        }
      })
      .addCase(CreateOilTransactionAction.fulfilled, (state, action) => {
        state.createOilTransactionLoading = false;
        state.createOilTransactionSuccess = true;
        state.createOilTransactionError = false;
        state.createOilTransaction = action.payload.data;
      })
      .addCase(CreateOilTransactionAction.rejected, (state, action) => {
        state.createOilTransactionLoading = false;
        state.createOilTransactionSuccess = false;
        state.createOilTransactionError = true;
        state.createOilTransaction = null;
      })
      ;
  },
});


export default oilStocksSlice.reducer;
