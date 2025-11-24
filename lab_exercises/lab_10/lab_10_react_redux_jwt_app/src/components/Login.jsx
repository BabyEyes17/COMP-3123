import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const token = "jwt_" + Math.random().toString(36).substring(2);

    const user = {
      username: "Jayden",
      role: "student"
    };

    dispatch(login({ token, user }));
    navigate("/dashboard");
  };

  return (
    
    <div style={{ padding: "20px" }}>
      
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>

    </div>
  );
}
