import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import dssService from './dss.service';

const initialState = {
  getDssByIdError: false,
  getDssByIdSuccess: false,
  getDssByIdLoading: false,
  getDssById: null,
};

export const GetDssByIDAction = createAsyncThunk(
  'dss/id',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await dssService.getDssById(data);
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
      ;
  },
});



export default dssSlice.reducer;
