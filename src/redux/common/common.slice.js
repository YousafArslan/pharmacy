import { createSlice } from '@reduxjs/toolkit';



const commonSlice = createSlice({
  name: 'common',
  initialState: {
    priceSymbol: '', // Add the price symbol state 
    colorrdata: 'hsl(234, 92.8%, 72.7%)', 
  },
  reducers: {
    setPriceSymbol: (state, action) => {
      state.priceSymbol = action.payload;
    },
    setColorPicker: (state, action) => {
      state.colorrdata = action.payload;
    },
  },
});

export const { setPriceSymbol,setColorPicker } = commonSlice.actions;
export default commonSlice.reducer;
