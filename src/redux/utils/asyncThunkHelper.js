/**
 * Utility to extract error message from various error formats
 */
export const getErrorMessage = (error) => {
  return (
    error.response?.data?.error ||
    error.response?.data?.message ||
    error.message ||
    'An unexpected error occurred'
  );
};

/**
 * Generic initial state for async operations
 */
export const createAsyncState = (initialData = null) => ({
  data: initialData,
  loading: false,
  error: null,
});

/**
 * Generic reducers for handling async thunk states
 */
export const createAsyncReducers = (builder, thunk, stateKey) => {
  builder
    .addCase(thunk.pending, (state) => {
      state[stateKey].loading = true;
      state[stateKey].error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state[stateKey].loading = false;
      state[stateKey].data = action.payload;
      state[stateKey].error = null;
    })
    .addCase(thunk.rejected, (state, action) => {
      state[stateKey].loading = false;
      state[stateKey].error = action.payload || 'Operation failed';
    });
};

/**
 * Reset state helper
 */
export const resetAsyncState = (state, stateKey) => {
  state[stateKey] = createAsyncState();
};
