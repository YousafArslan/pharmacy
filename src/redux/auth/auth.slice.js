import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import authService from './auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Get currentUser from localStorage
// const reactUser = JSON.parse(localStorage.getItem('glare_ecom'));
const reactUser = {};

const initialState = {
  currentUser: reactUser || null,

  isLoginError: false,
  isLoginSuccess: false,
  isLoginLoading: false,
  loginMessage: '',

  isRegisterError: false,
  isRegisterSuccess: false,
  isRegisterLoading: false,
  registerMessage: '',

  isEmailExistError: false,
  isEmailExistSuccess: false,
  isEmailExistLoading: false,
  isEmailExist: null,

  forgotPasswordError: false,
  forgotPasswordSuccess: false,
  forgotPasswordLoading: false,
  forgotPassword: '',

  isLoggedIn: false,
};

export const LoginAction = createAsyncThunk(
  'users/login',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await authService.login(data);
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

export const CheckEmail = createAsyncThunk(
  'auth/checkEmail',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await authService.checkEmail(data);

      if (response.status === 200) {
        if (moveToNext) {
          moveToNext(response?.data?.message, 'success');
        }
      } else {
        moveToNext(response?.data?.message, 'error');
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

export const ResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await authService.resetPassword(data);

      if (response.data.succeeded) {
        if (moveToNext) {
          moveToNext(response?.data?.message, 'success');
        }
      } else {
        moveToNext(response?.data?.message, 'error');
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

// Registration currentUser
export const register = createAsyncThunk(
  'auth/register',
  async ({values, notifyToaster}, thunkAPI) => {
    try {
      await authService.register(values);
      notifyToaster();
      return true;
    } catch (error) {
      notifyToaster(error.message || error, false);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.clear();
  authService.logout();
});


export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.currentUser = null;
      state.isSuccess = false;
    },
    login: (state,action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(LoginAction.pending, state => {
        state.isLoginLoading = true;
        state.isLoginSuccess = '';
      })
      .addCase(LoginAction.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isLoggedIn = true;
          state.currentUser = {token:action.payload.data.token,...action.payload.data.payload};
      })
      .addCase(LoginAction.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoginLoading = false;
        state.isLoginError = true;
        state.currentUser = null;
      })
      .addCase(CheckEmail.pending, state => {
        state.isEmailExistLoading = true;
        state.isEmailExist = '';
      })
      .addCase(CheckEmail.fulfilled, (state, action) => {
        state.isEmailExistLoading = false;
        state.isEmailExistSuccess = true;
        state.isEmailExist = action.payload;
      })
      .addCase(CheckEmail.rejected, (state, action) => {
        state.isEmailExist = action.payload;
        state.isEmailExistLoading = false;
        state.isEmailExistError = true;
      })
      .addCase(ResetPassword.pending, state => {
        state.forgotPasswordLoading = true;
        state.forgotPassword = '';
      })
      .addCase(ResetPassword.fulfilled, (state, action) => {
        state.forgotPasswordSuccess = true;
        state.forgotPasswordLoading = false;
        state.isEmailExistSuccess = false;
        state.forgotPassword = action.payload;
      })
      .addCase(ResetPassword.rejected, (state, action) => {
        state.forgotPassword = action.payload;
        state.forgotPasswordLoading = false;
        state.forgotPasswordError = true;
      })
      .addCase(logout.fulfilled, state => {
        state.currentUser = null;
      });
  },
});

export const {reset, login} = authSlice.actions;

export default authSlice.reducer;
