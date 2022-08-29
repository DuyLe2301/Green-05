
import {useState} from 'react'

function App() {
    const[user,setuser]=useState({
        name:'Duy',
        phone:'0233333'
    })
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.phone}</div>
      <button onClick={()=>{setuser({
        ...user,
        name:'Tung',
        phone:'1221222'
      })}}>click</button>
    </div>
  ); 
}


export default App;

