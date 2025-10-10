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

  isLoggedIn: false,
};

export const LoginAction = createAsyncThunk(
  'users/login',
  async ({data, moveToNext}, thunkAPI) => {
    try {
      const response = await authService.login(data);
      // authService.login returns { message, token, user } directly

      if (response?.token && response?.user) {
        if (moveToNext) {
          moveToNext(response?.message, 'success');
        }
      }
      return response;
    } catch (error) {
      console.log("error", error)
      // error is already a string from auth.service.js
      const errorMessage = typeof error === 'string' ? error : (error?.message || error.toString());

      if (moveToNext) {
        moveToNext(errorMessage, 'error');
      }
      return thunkAPI.rejectWithValue(errorMessage);
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

// Registration currentUser
export const registerAction = createAsyncThunk(
  'users/signup',
  async ({ values }, thunkAPI) => {
    try {
      await authService.register(values);

      return true;
    } catch (error) {
      // Error is already a string from auth.service.js
      const errorMessage = typeof error === 'string' ? error : (error?.message || error.toString());
      return thunkAPI.rejectWithValue(errorMessage);
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
        state.isLoginLoading = false;
        state.isLoginSuccess = true;
        state.isLoggedIn = true;
        // action.payload is { message, token, user } directly
        state.currentUser = {
          token: action.payload.token,
          user: action.payload.user,
        };
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
      .addCase(registerAction.pending, state => {
        state.isRegisterLoading = true;
        state.isRegisterSuccess = '';
      })
      .addCase(registerAction.fulfilled, state => {
        state.isRegisterLoading = false;
        state.isRegisterSuccess = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.registerMessage = action.payload;
        state.isRegisterLoading = false;
        state.isRegisterError = true;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.currentUser = null;
      });
  },
});

export const {reset, login} = authSlice.actions;

export default authSlice.reducer;
