import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import chequesService from './cheques.service';
import { getErrorMessage, createAsyncState, createAsyncReducers, resetAsyncState } from '../utils/asyncThunkHelper';

/**
 * Initial state
 */
const initialState = {
  upload: createAsyncState(null),
};

/**
 * Upload a cheque
 */
export const uploadCheque = createAsyncThunk(
  'cheques/upload',
  async (chequeData, { rejectWithValue }) => {
    try {
      const response = await chequesService.upload(chequeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Cheques slice
 */
const chequesSlice = createSlice({
  name: 'cheques',
  initialState,
  reducers: {
    resetUploadState: (state) => resetAsyncState(state, 'upload'),
  },
  extraReducers: (builder) => {
    createAsyncReducers(builder, uploadCheque, 'upload');
  },
});

export const { resetUploadState } = chequesSlice.actions;
export default chequesSlice.reducer;
