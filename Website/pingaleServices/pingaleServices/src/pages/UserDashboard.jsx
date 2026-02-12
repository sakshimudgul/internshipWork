import React from 'react'
import users from '../data/users'
import User from './components/User';
function UserDashboard() {
    console.log(users);
  return (
    <div>
         <h1>User listing</h1>
         {users.map((user)=>{
            return(
                <div key={user.id}>
                <User {...user} />
                </div>
            )

         })}
    </div>
  )
}

export default UserDashboard