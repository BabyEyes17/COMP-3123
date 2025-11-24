import React, { useContext } from 'react'
import EmployeeContext from '../context/EmployeeContext'
import UserContext from '../context/UserContext';

export default function EmployeeChild1() {
    const userContext = useContext(UserContext);
    const empContext = useContext(EmployeeContext);
  return (
    <div>
        <h2>Employee Child1</h2>
        <p>Name: {empContext.name}</p>
        <p>Designation: {empContext.designation}</p>
        <p>Email: {empContext.emal}</p>
        <hr />
        <h3>Accessing User Context inside Employee Child1</h3>
        <p>First Name: {userContext.first_name}</p>
        <p>Last Name: {userContext.last_name}</p>
        <p>City: {userContext.city}</p>
        
    </div>
  )
}
