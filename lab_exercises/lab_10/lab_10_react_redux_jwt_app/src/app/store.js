import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import employeeReducer from "../features/employee/employeeSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  
  reducer: {
    auth: authReducer,
    user: userReducer,
    employee: employeeReducer
  }
});
