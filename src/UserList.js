import React, { useContext, useEffect } from "react";
import { UserDispatch } from './App';


function User({ user }){

    const dispatch = useContext(UserDispatch);

    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active? 'green':'black'
            }} onClick={()=>{dispatch({type:'TOGGLE_USER',userId:user.id})}}>{user.username}</b>
            <span>{user.email}</span>
            <button onClick={()=>{dispatch({type:'REMOVE_USER',userId:user.id})}}>삭제</button>
        </div>
    )
}


function UserList({ users }){

    return(
        <>
            {users.map(user =>(
                <User user={user} key={user.id} />
            ))}
        </>
    )
}export default UserList;