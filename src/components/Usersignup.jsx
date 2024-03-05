import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
const Usersignup = () => {

    var [inputs,setInputs]
    =useState({"fname":'',"lname":'',"pnumber":'',"email":'',"username":'',"password":''})
       const inputHandler=(e)=>{
       const {name,value}=e.target
       setInputs((inputs)=>({...inputs,[name]:value}))
       console.log(inputs)
       }

       const addHandler=()=>{
        console.log("Clicked")
    
        console.log(inputs)
        axios.post("http://localhost:4000/newuser",inputs)
    
        .then((response)=>{
            alert("Record Saved")
        })
        .catch(err=>console.log(err))
    }
  return (
    <center>
    <div>
        <h2>SIGN UP</h2>
       
        <TextField id="outlined-basic" label="First Name" variant="outlined" 
        name="fname"  value={inputs.fname} 
        onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined"
        name="lname"  value={inputs.lname} 
        onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" 
        name="pnumber"  value={inputs.pnumber} 
        onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        name="email"  value={inputs.email} 
        onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Username" variant="outlined" 
        name="username"  value={inputs.username} 
        onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" 
        name="password"  value={inputs.password} 
        onChange={inputHandler}/><br/><br/>
        <Button variant="contained" onClick={addHandler} >SIGN UP</Button><br/><br/>
    </div>
    </center>
  )
}

export default Usersignup