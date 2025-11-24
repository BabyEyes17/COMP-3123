import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  designation: "Professor",
  email: "j@d.com",
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateEmployee: (state, action) => {
      state.name = action.payload.name;
      state.designation = action.payload.designation;
      state.email = action.payload.email;
    },
  },
});

export const { updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
