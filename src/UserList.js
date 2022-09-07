import React from "react";

function User({user}){
    return(
        <div>
            <b>{user.username}</b><span>{user.email}</span>
        </div>
    )
}


function UserList({users}){
    

    return(
        <>
            {users.map(user =>(
                <User user={user} key={user.id} />
            ))}
        </>
    )
}export default UserList;