import React, {useRef, useState} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App(){
  
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs // 위에 useState 객체를 구조분해할당 함

  const firstFocus = useRef()

  const onChange = (e) =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
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

  const onCreate = () =>{
    console.log('작동')
    setUsers([
      ...users,
      {
        id:nextId.current,
        username : username,
        email : email
      }
    ])
    nextId.current +=1;
    setInputs({
      username:'',
      email:''
    })
    
    firstFocus.current.focus()
  }

  return(
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} firstFocus={firstFocus} />
    <UserList users={users}/>
    </>
  )
}export default App;