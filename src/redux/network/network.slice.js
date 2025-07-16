import { createSlice } from '@reduxjs/toolkit';

// Initial state for network connection
const initialState = {
  isConnected: true, // Default to true, assuming the device starts with internet
  isLoading: false, // Flag for loading state
  isError: false, // Flag to handle errors (e.g., fetching connection status)
};

// Create the slice for managing the network connection
export const networkSlice = createSlice({
  name: 'network', // Slice name
  initialState,
  reducers: {
    setConnectionStatus: (state, action) => {
      state.isConnected = action.payload; // Set the connection status
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload; // Set the loading state
    },
    setError: (state, action) => {
      state.isError = action.payload; // Set the error state
    },
  },
  extraReducers: builder => {
    // Add any additional async actions if necessary
  },
});

export const { setConnectionStatus, setLoading, setError } = networkSlice.actions;

export default networkSlice.reducer;
