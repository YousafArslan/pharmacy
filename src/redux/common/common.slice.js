import { createSlice } from '@reduxjs/toolkit';
import { getThemeColors } from '../../utils/colors';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    priceSymbol: '', // Add the price symbol state
    colorrdata: 'hsl(234, 92.8%, 72.7%)',
    isDarkMode: false, // Dark mode toggle state
    themeColors: getThemeColors(false), // Initialize with light theme
  },
  reducers: {
    setPriceSymbol: (state, action) => {
      state.priceSymbol = action.payload;
    },
    setColorPicker: (state, action) => {
      state.colorrdata = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.themeColors = getThemeColors(state.isDarkMode);
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      state.themeColors = getThemeColors(action.payload);
    },
  },
});

export const { setPriceSymbol, setColorPicker, toggleDarkMode, setDarkMode } = commonSlice.actions;
export default commonSlice.reducer;
