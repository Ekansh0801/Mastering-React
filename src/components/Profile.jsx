import React from 'react'
import {useState} from "react"

const Profile = (props) => {
  const [count,setCount] = useState(0);
  const {name,address,email} = props;
  return (
    <div style={{'border' : '1px solid black'}}>
        <h1>Functional Component</h1>
        <h3>Name : {name}</h3>
        <h3>Address : {address}</h3>
        <h3>Email : {email}</h3>
        <h1>Count - {count}</h1>
        <button onClick={() =>{
          setCount(count + 1);
        }}>HIT ME</button>
    </div>
  )
}

export default Profile
