import React from 'react'
import { UserConsumer } from '../context/UserContext'
import { EmployeeProvider } from '../context/EmployeeContext'   
import EmployeeChild1 from './EmployeeChild1'  

const employee = {
  name: 'John Doe',
  designation: 'Professor',
  emal: 'j@d.com',
}

export default function UserChild2() {
  return (
    <div>
        <h2>User Child2</h2>
        <UserConsumer>
            {(user) => (
                <div>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>City: {user.city}</p>
                    <p>{user.display()}</p>
                </div>
            )}
        </UserConsumer>
        <EmployeeProvider value={employee}>
           <EmployeeChild1 />
        </EmployeeProvider>
    </div>
  )
}
