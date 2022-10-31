import { Button } from 'bootstrap'
import React, { useState } from 'react'
import './e-commerce.css'

const Register = () => {
  const[data,setdata]=useState({email:"",firstname:"",lastname:"",middlename:"",password:"",confirmpassword:""});
  const {email,firstname,lastname,middlename,password,confirmpassword} = data;
  
  const handleChange= e =>{
    setdata({...data,[e.target.name]:[e.target.value]});
    console.log(data);
  }

  return (
    <div className = "container">
        <div className='wrapper'>
            <h1 className='header1'>Registration Page</h1>
            <form className='labelform' >
                <hr></hr>
                <label className='textcss'>Email Address:</label>
                <input name = "email" type = "text" onChange={handleChange} value ={email} />
                <br></br>  <br></br> 
                <label>First Name:</label>
                <input name="firstname" type = "text" onChange={handleChange} value ={firstname}/>
                <br></br><br></br> 
                <label>Middle Name:</label>
                <input name = "middlename" type = "text" onChange={handleChange} value ={middlename}/>
                <br></br><br></br> 
                <label>Last Name:</label>
                <input name = "lastname" type = "text" onChange={handleChange} value ={lastname}/>
                <br></br><br></br> 
                <label>Password:</label>
                <input name = "password" type = "text" onChange={handleChange} value ={password}/>
                <br></br><br></br> 
                <label>Confirm Password:</label>
                <input name = "confirmpassword" type = "text" onChange={handleChange} value ={confirmpassword}/>
                <br></br><br></br> 
                <input type = "button" value="Submit"/>
                <hr></hr>
            </form>
        </div>
    </div>
  )
}

export default Register;