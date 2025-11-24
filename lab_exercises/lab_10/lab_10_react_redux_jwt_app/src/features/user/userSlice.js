import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  first_name: "John",
  last_name: "Doe",
  city: "Toronto",
  
  display() {
    return `${this.first_name} ${this.last_name} lives in ${this.city}`;
  }
};

const userSlice = createSlice({
  
  name: "user",
  initialState,
  
  reducers: {
    updateUser: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.city = action.payload.city;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
