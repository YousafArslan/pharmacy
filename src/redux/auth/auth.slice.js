import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getErrorMessage, createAsyncState } from '../utils/asyncThunkHelper';

/**
 * Initial state
 */
const initialState = {
  currentUser: null,
  isLoggedIn: false,
  login: createAsyncState(null),
  register: createAsyncState(null),
  checkEmail: createAsyncState(null),
};

/**
 * Login action
 */
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      return response; // { message, token, user }
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Register action
 */
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Check email availability
 */
export const checkEmailAvailability = createAsyncThunk(
  'auth/checkEmail',
  async (email, { rejectWithValue }) => {
    try {
      const response = await authService.checkEmail(email);
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Logout action
 */
export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.clear();
  authService.logout();
});

/**
 * Auth slice
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Set logged in user (for manual login, e.g., from AsyncStorage)
     */
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    /**
     * Clear auth state
     */
    clearAuthState: (state) => {
      state.login = createAsyncState(null);
      state.register = createAsyncState(null);
      state.checkEmail = createAsyncState(null);
    },
    /**
     * Logout (without async)
     */
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.data = action.payload;
        state.currentUser = {
          token: action.payload.token,
          user: action.payload.user,
        };
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
        state.currentUser = null;
        state.isLoggedIn = false;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.register.loading = true;
        state.register.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.loading = false;
        state.register.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.loading = false;
        state.register.error = action.payload;
      })
      // Check Email
      .addCase(checkEmailAvailability.pending, (state) => {
        state.checkEmail.loading = true;
        state.checkEmail.error = null;
      })
      .addCase(checkEmailAvailability.fulfilled, (state, action) => {
        state.checkEmail.loading = false;
        state.checkEmail.data = action.payload;
      })
      .addCase(checkEmailAvailability.rejected, (state, action) => {
        state.checkEmail.loading = false;
        state.checkEmail.error = action.payload;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoggedIn = false;
      });
  },
});

export const { setUser, clearAuthState, logout } = authSlice.actions;
export default authSlice.reducer;
