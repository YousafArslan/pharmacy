import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dssService from './dss.service';
import { getErrorMessage, createAsyncState, createAsyncReducers, resetAsyncState } from '../utils/asyncThunkHelper';

/**
 * Initial state
 */
const initialState = {
  details: createAsyncState(null),
  saleSummary: createAsyncState(null),
  offlineData: createAsyncState(null),
};

/**
 * Fetch DSS by ID
 */
export const fetchDssById = createAsyncThunk(
  'dss/fetchById',
  async (params, { rejectWithValue }) => {
    try {
      const response = await dssService.getById(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Fetch sale summary details
 */
export const fetchSaleSummaryDetails = createAsyncThunk(
  'dss/fetchSaleSummary',
  async (params, { rejectWithValue }) => {
    try {
      const response = await dssService.getSaleSummaryDetails(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Fetch offline data
 */
export const fetchOfflineData = createAsyncThunk(
  'dss/fetchOfflineData',
  async (id, { rejectWithValue }) => {
    try {
      const data = await dssService.getOfflineData(id);
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * DSS slice
 */
const dssSlice = createSlice({
  name: 'dss',
  initialState,
  reducers: {
    resetDssDetails: (state) => resetAsyncState(state, 'details'),
    resetSaleSummary: (state) => resetAsyncState(state, 'saleSummary'),
    resetOfflineData: (state) => resetAsyncState(state, 'offlineData'),
    resetAllDssStates: () => initialState,
  },
  extraReducers: (builder) => {
    createAsyncReducers(builder, fetchDssById, 'details');
    createAsyncReducers(builder, fetchSaleSummaryDetails, 'saleSummary');
    createAsyncReducers(builder, fetchOfflineData, 'offlineData');
  },
});

export const { resetDssDetails, resetSaleSummary, resetOfflineData, resetAllDssStates } = dssSlice.actions;
export default dssSlice.reducer;
