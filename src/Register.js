import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './e-commerce.css'

const Register = () => {
  const[data,setdata]=useState({email:"",firstname:"",lastname:"",middlename:"",password:"",confirmpassword:""});
  const {email,firstname,lastname,middlename,password,confirmpassword} = data;

  const EmailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";


  const handleChange= e =>{
    setdata({...data,[e.target.name]:[e.target.value]});
  }
  const handlesubmit = e =>{
    e.preventDefault();
    //axios.put("/register",data).then(res=>console.log(res));
  }
  useEffect=(()=>{

  },[password,confirmpassword]);
  return (
    <div className = "container">
        <div className='wrapper'>
            <h1 className='header1'>Registration Page</h1>
            <form className='labelform' >
                <hr></hr>
                <label className='textcss'>Email Address:</label>
                <br></br> 
                <input name = "email" type = "text" onChange={handleChange} value ={email} required/>
                <br></br>  <br></br> 
                <label>First Name:</label>
                <br></br> 
                <input name="firstname" type = "text" onChange={handleChange} value ={firstname} required/>
                <br></br><br></br> 
                <label>Middle Name:</label>
                <br></br> 
                <input name = "middlename" type = "text" onChange={handleChange} value ={middlename} required/>
                <br></br><br></br> 
                <label>Last Name:</label>
                <br></br> 
                <input name = "lastname" type = "text" onChange={handleChange} value ={lastname} required/>
                <br></br><br></br> 
                <label>Password:</label>
                <br></br> 
                <input name = "password" type = "text" onChange={handleChange} value ={password} required/>
                <br></br><br></br> 
                <label>Confirm Password:</label>
                <br></br> 
                <input name = "confirmpassword" type = "text" onChange={handleChange} value ={confirmpassword} required/>
                <br></br><br></br> 
                <input type = "submit" value="Submit" onClick={handlesubmit}/>
                <hr></hr>
            </form>
        </div>
    </div>
  )
}

export default Register;