import React from "react";

function CreateUser({username, email, onChange, onCreate, firstFocus}){
    return(
        <>
            <input name="username" placeholder="이름" onChange={onChange} value={username} ref={firstFocus}/>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </>
    )
}export default CreateUser;