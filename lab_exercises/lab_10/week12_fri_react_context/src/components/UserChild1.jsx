import React from 'react'
import { UserConsumer } from '../context/UserContext'
import UserChild2 from './UserChild2'

export default function UserChild1() {
  return (
    <div>
        <h2>User Child1</h2>
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
        <UserChild2></UserChild2>
    </div>
  )
}
