import { Button } from 'bootstrap'
import React from 'react'

const Register = () => {
  return (
    <div className = "container">
        <div>
            <form>
                <label>First Name:</label><input type = "text"/><br></br>
                <label>Middle Name:</label><input type = "text"/><br></br>
                <label>Last Name:</label><input type = "text"/><br></br>
                <label>Email Address:</label><input type = "text"/><br></br>
                <label>Password:</label><input type = "text"/><br></br>
                <label>Confirm Password:</label><input type = "text"/><br></br>
                <input type = "button"/>
            </form>
        </div>
    </div>
  )
}

export default Register