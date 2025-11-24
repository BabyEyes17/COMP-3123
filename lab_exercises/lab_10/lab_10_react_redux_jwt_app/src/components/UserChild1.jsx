import React from 'react'
import { useSelector } from 'react-redux'
import UserChild2 from './UserChild2'

export default function UserChild1() {

  const user = useSelector((state) => state.user);

  return (
    <div>
      
      <h2>User Child1</h2>

      <div>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>City: {user.city}</p>
        <p>{user.display()}</p>
      </div>

      <UserChild2 />
    </div>
  );
}
