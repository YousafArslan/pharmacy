import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import dssService from './dss.service';

const initialState = {
  getDssByIdError: false,
  getDssByIdSuccess: false,
  getDssByIdLoading: false,
  getDssById: null,

  getSaleSummaryDetailsError: false,
  getSaleSummaryDetailsSuccess: false,
  getSaleSummaryDetailsLoading: false,
  getSaleSummaryDetails: null,
  
  getOfflineDataError: false,
  getOfflineDataSuccess: false,
  getOfflineDataLoading: false,
  getOfflineData: null,
};

export const GetDssByIDAction = createAsyncThunk(
  'dss/id',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await dssService.getDssById(data);
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

export const GetSaleSummaryDetailsAction = createAsyncThunk(
  'dssDetails/id',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await dssService.getSaleSummaryDetails(data);
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


export const GetOfflineDataAction = createAsyncThunk(
  'offline/id',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await dssService.getOfflineData(data);
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

export const dssSlice = createSlice({
  name: 'dssReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetDssByIDAction.pending, state => {
        if (!state.getDssByIdLoading) {
          state.getDssByIdLoading = true;
          state.getDssByIdSuccess = false;
          state.getDssByIdError = false;
          state.getDssById = null;
        }
      })
      .addCase(GetDssByIDAction.fulfilled, (state, action) => {
        state.getDssByIdLoading = false;
        state.getDssByIdSuccess = true;
        state.getDssByIdError = false;
        state.getDssById = action.payload.data;
      })
      .addCase(GetDssByIDAction.rejected, (state, action) => {
        state.getDssByIdLoading = false;
        state.getDssByIdSuccess = false;
        state.getDssByIdError = true;
        state.getDssById = null;
      })
      .addCase(GetSaleSummaryDetailsAction.pending, state => {
        if (!state.getSaleSummaryDetailsLoading) {
          state.getSaleSummaryDetailsLoading = true;
          state.getSaleSummaryDetailsSuccess = false;
          state.getSaleSummaryDetailsError = false;
          state.getSaleSummaryDetails = null;
        }
      })
      .addCase(GetSaleSummaryDetailsAction.fulfilled, (state, action) => {
        state.getSaleSummaryDetailsLoading = false;
        state.getSaleSummaryDetailsSuccess = true;
        state.getSaleSummaryDetailsError = false;
        state.getSaleSummaryDetails = action.payload.data;
      })
      .addCase(GetSaleSummaryDetailsAction.rejected, (state, action) => {
        state.getSaleSummaryDetailsLoading = false;
        state.getSaleSummaryDetailsSuccess = false;
        state.getSaleSummaryDetailsError = true;
        state.getSaleSummaryDetails = null;
      })
      .addCase(GetOfflineDataAction.pending, state => {
        if (!state.getOfflineDataLoading) {
          state.getOfflineDataLoading = true;
          state.getOfflineDataSuccess = false;
          state.getOfflineDataError = false;
          state.getOfflineData = null;
        }
      })
      .addCase(GetOfflineDataAction.fulfilled, (state, action) => {
        state.getOfflineDataLoading = false;
        state.getOfflineDataSuccess = true;
        state.getOfflineDataError = false;
        state.getOfflineData = action.payload.data;
      })
      .addCase(GetOfflineDataAction.rejected, (state, action) => {
        state.getOfflineDataLoading = false;
        state.getOfflineDataSuccess = false;
        state.getOfflineDataError = true;
        state.getOfflineData = null;
      })
      ;
  },
});

export default dssSlice.reducer;
