import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {
            console.log(response)
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

  return (
    <div>
        <h2>User List</h2>
        <table border="1" cellSpacing="5" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
        </table>
    </div>
  )
}
