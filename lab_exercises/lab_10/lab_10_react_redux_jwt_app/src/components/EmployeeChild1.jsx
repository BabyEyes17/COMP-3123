import React from 'react'
import { useSelector } from 'react-redux'

export default function EmployeeChild1() {

  const employee = useSelector((state) => state.employee);
  const user = useSelector((state) => state.user);

  return (
    
    <div>
      <h2>Employee Child1</h2>

      <p>Name: {employee.name}</p>
      <p>Designation: {employee.designation}</p>
      <p>Email: {employee.email}</p>

      <hr />

      <h3>Accessing User Data via Redux inside Employee Child1</h3>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>City: {user.city}</p>
    </div>
  )
}
