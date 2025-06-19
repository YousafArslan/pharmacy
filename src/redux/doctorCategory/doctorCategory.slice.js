import { createSlice } from '@reduxjs/toolkit';

const doctorCategorySlice = createSlice({
  name: 'doctorCategory',
  initialState: {
    categories: [], // Define an initial state
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = doctorCategorySlice.actions;
export default doctorCategorySlice.reducer;
