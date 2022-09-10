import React, {useRef, useState, useMemo, useReducer} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active === true).length;
}

const initialState = {
  inputs:{
    username:'',
    email:''
  },
  users:[
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:action.value
        }
      };
    case 'CREATE_USER':
      return{
        ...state,
        users:[
          ...state.users,
          {
            id:action.nextId,
            username:action.username,
            email:action.email,
            active:false
          }
        ]
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user => (user.id===action.userId)?{...user, active:!user.active}:user)
      }
      default:
        return state;
  }

}

export const UserDispatch = React.createContext(null)


function App(){

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const { users } = state
  const {username, email} = state.inputs

  const nextId = useRef(4)

  const onChange = (e) =>{
    const {name, value} = e.target //name, value 비구조화 할당
    dispatch({
      type:'CHANGE_INPUT',
      name,
      value
    })
  }

  const onCreate = () =>{
    dispatch({
      type:'CREATE_USER',
      username,
      email,
      nextId : nextId.current
    })
    nextId.current += 1
  }

  const count = countActiveUsers(users)
  // const count = useMemo(()=>{countActiveUsers(users)}, [users]) // useMemo에 집어넣으면 문제가 생긴다.. 왜그럴까..?
  console.log(count)
  return(
    
    <UserDispatch.Provider value={dispatch}>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}  />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  )
}export default App;