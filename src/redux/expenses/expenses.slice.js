import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import expenseService from './expenses.service';

const initialState = {
  getAllExpensesError: false,
  getAllExpensesSuccess: false,
  getAllExpensesLoading: false,
  getAllExpenses: null,
  
  getExpensesWithTotalError: false,
  getExpensesWithTotalSuccess: false,
  getExpensesWithTotalLoading: false,
  getExpensesWithTotal: null,
  
  createExpensesError: false,
  createExpensesSuccess: false,
  createExpensesLoading: false,
  createExpenses: null,
  
  editExpensesError: false,
  editExpensesSuccess: false,
  editExpensesLoading: false,
  editExpenses: null,
};

export const GetAllExpensesAction = createAsyncThunk(
  'expenses/getAll',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await expenseService.getAllExpenses(data);
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
export const GetExpensesWithTotal = createAsyncThunk(
  'expenses/getExpensesWithTotal',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await expenseService.getExpensesWithTotal(data);
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

export const CreateExpensesAction = createAsyncThunk(
  'expenses/create',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await expenseService.createExpenses(data);
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
export const EditExpensesAction = createAsyncThunk(
  'expenses/edit',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await expenseService.editExpenses(data);
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

export const expensesSlice = createSlice({
  name: 'expensesReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetAllExpensesAction.pending, state => {
        if (!state.getAllExpensesLoading) {
          state.getAllExpensesLoading = true;
          state.getAllExpensesSuccess = false;
          state.getAllExpensesError = false;
          state.getAllExpenses = null;
        }
      })
      .addCase(GetAllExpensesAction.fulfilled, (state, action) => {
        state.getAllExpensesLoading = false;
        state.getAllExpensesSuccess = true;
        state.getAllExpensesError = false;
        state.getAllExpenses = action.payload.data;
      })
      .addCase(GetAllExpensesAction.rejected, (state, action) => {
        state.getAllExpensesLoading = false;
        state.getAllExpensesSuccess = false;
        state.getAllExpensesError = true;
        state.getAllExpenses = null;
      })
      .addCase(GetExpensesWithTotal.pending, state => {
        if (!state.getExpensesWithTotalLoading) {
          state.getExpensesWithTotalLoading = true;
          state.getExpensesWithTotalSuccess = false;
          state.getExpensesWithTotalError = false;
          state.getExpensesWithTotal = null;
        }
      })
      .addCase(GetExpensesWithTotal.fulfilled, (state, action) => {
        state.getExpensesWithTotalLoading = false;
        state.getExpensesWithTotalSuccess = true;
        state.getExpensesWithTotalError = false;
        state.getExpensesWithTotal = action.payload.data;
      })
      .addCase(GetExpensesWithTotal.rejected, (state, action) => {
        state.getExpensesWithTotalLoading = false;
        state.getExpensesWithTotalSuccess = false;
        state.getExpensesWithTotalError = true;
        state.getExpensesWithTotal = null;
      })
      .addCase(CreateExpensesAction.pending, state => {
        if (!state.createExpensesLoading) {
          state.createExpensesLoading = true;
          state.createExpensesSuccess = false;
          state.createExpensesError = false;
          state.createExpenses = null;
        }
      })
      .addCase(CreateExpensesAction.fulfilled, (state, action) => {
        state.createExpensesLoading = false;
        state.createExpensesSuccess = true;
        state.createExpensesError = false;
        state.createExpenses = action.payload.data;
      })
      .addCase(CreateExpensesAction.rejected, (state, action) => {
        state.createExpensesLoading = false;
        state.createExpensesSuccess = false;
        state.createExpensesError = true;
        state.createExpenses = null;
      })
      .addCase(EditExpensesAction.pending, state => {
        if (!state.editExpensesLoading) {
          state.editExpensesLoading = true;
          state.editExpensesSuccess = false;
          state.editExpensesError = false;
          state.editExpenses = null;
        }
      })
      .addCase(EditExpensesAction.fulfilled, (state, action) => {
        state.editExpensesLoading = false;
        state.editExpensesSuccess = true;
        state.editExpensesError = false;
        state.editExpenses = action.payload.data;
      })
      .addCase(EditExpensesAction.rejected, (state, action) => {
        state.editExpensesLoading = false;
        state.editExpensesSuccess = false;
        state.editExpensesError = true;
        state.editExpenses = null;
      })
      ;
  },
});

export default expensesSlice.reducer;
