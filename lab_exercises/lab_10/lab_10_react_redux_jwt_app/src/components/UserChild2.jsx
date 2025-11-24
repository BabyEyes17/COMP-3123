import React from 'react'
import { useSelector } from 'react-redux'
import EmployeeChild1 from './EmployeeChild1'

export default function UserChild2() {

  const user = useSelector((state) => state.user);
  const employee = useSelector((state) => state.employee);

  return (
    
    <div>
      <h2>User Child2</h2>

      <div>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>City: {user.city}</p>
        <p>{user.display()}</p>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h3>Employee Info (from Redux)</h3>
        <p>Name: {employee.name}</p>
        <p>Designation: {employee.designation}</p>
        <p>Email: {employee.email}</p>
      </div>

      <EmployeeChild1 />
    </div>
  )
}
