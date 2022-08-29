import {useState} from 'react'

const HomeTest02 = () => {
    const [users,setUsers]=useState([])
    console.log(users,setUsers)
  return (
    <div>
      {users.map((user)=>{
        return (
        <div>{user}</div>
        )
      })}
      <button onClick={()=>{
        setUsers([
            ...users,
            'Duy'
        ])
      }}>click</button>
    </div>
  ); 
}
export default HomeTest02;