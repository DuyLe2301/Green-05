import {useState} from 'react'
import User from './User'

const HomeTest03 = () => {
  const [users,setUsers] = useState([])
  console.log(users,setUsers)
  const onCreate = () => {
    setUsers([
      ...users,
      {id:Math.random(),name:'Duy',phone:'11616626'}
  
    ])
  }  

  const onDelete = (id) => {
      const newUsers=users.filter((b)=>{
        return b.id !== id
    })
    setUsers(newUsers)
  }

  return (
    <div>
      
      <button onClick={onCreate}>click</button>
      
      {users.map((a)=>{
        return (
          <User key={a.id} Duy={a}  onDelete={onDelete}/>
        )
      })}
    </div>
  ); 
}
export default HomeTest03;