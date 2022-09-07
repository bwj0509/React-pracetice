import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import './App.css';
import { useRef, useState } from "react";

function App(){

  const [inputs, setInput] = useState({
    username:'',
    email:'',
  })

  const {username, email} = inputs;

  const onChange = (e) =>{
    const {name, value} = e.target
    console.log(name, value)
    setInput({
        ...inputs,
        [name]:value
    })

}

  const onReset = () =>{
      setInput({
          name:'',
          nickname:''
      })

  }

  const [users, setUsers] = useState([
    {
        id:1,
        username:'velopert',
        email:'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
])


  const nextId = useRef(4);

  const onCreate = (e) =>{
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user])

    setInput({
      username:'',
      email:''
    })
    nextId.current +=1
  }

  console.log(users)

  return(
    <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} />
  </>
    
    
    
  )
}

export default App;
