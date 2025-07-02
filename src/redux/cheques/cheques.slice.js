import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import chequesService from './cheques.service';

const initialState = {
  addChequeError: false,
  addChequeSuccess: false,
  addChequeLoading: false,
  addCheque: null,
};

export const AddChequeAction = createAsyncThunk(
  'cheques/upload',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await chequesService.addCheque(data);
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


export const chequesSlice = createSlice({
  name: 'chequesReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(AddChequeAction.pending, state => {
        if (!state.addChequeLoading) {
          state.addChequeLoading = true;
          state.addChequeSuccess = false;
          state.addChequeError = false;
          state.addCheque = null;
        }
      })
      .addCase(AddChequeAction.fulfilled, (state, action) => {
        state.addChequeLoading = false;
        state.addChequeSuccess = true;
        state.addChequeError = false;
        state.addCheque = action.payload.data;
      })
      .addCase(AddChequeAction.rejected, (state, action) => {
        state.addChequeLoading = false;
        state.addChequeSuccess = false;
        state.addChequeError = true;
        state.addCheque = null;
      })
      ;
  },
});



export default chequesSlice.reducer;
