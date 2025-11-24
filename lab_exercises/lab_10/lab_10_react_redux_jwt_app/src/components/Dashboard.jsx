import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {

  const { token, user } = useSelector((state) => state.auth);

  return (
    
    <div style={{ padding: "20px" }}>
      
      <h2>Dashboard</h2>

      <h3>User Info</h3>
      
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Role:</strong> {user?.role}</p>

      <h3>JWT Token</h3>
      <p>{token}</p>

    </div>
  );
}
