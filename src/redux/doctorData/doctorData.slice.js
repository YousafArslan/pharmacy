import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchDoctorDetails = createAsyncThunk(
//   'doctorData/fetchDoctorDetails',
//   async () => {
//     // Replace with a valid API endpoint
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
//   }
// );r

const doctorDataSlice = createSlice({
  name: 'doctorData',
  initialState: {
    doctorDetails: [], // Initialize as an empty array
    loading: false, // Default to false
    error: null, // Default to null
  },
  reducers: {
    fetchDoctorDetails: (state, action) => {
      state.categories = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchDoctorDetails.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchDoctorDetails.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.doctorDetails = action.payload || []; // Handle undefined payloads
  //     })
  //     .addCase(fetchDoctorDetails.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message || 'Failed to fetch data';
  //     });
  // },
});
export const { fetchDoctorDetails } = doctorDataSlice.actions;

export default doctorDataSlice.reducer;
