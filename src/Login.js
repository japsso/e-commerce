import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
 const Login = () => {
    const [username, setUsername] = React.useState();
    const[password,setPassword]= React.useState();
  
    const handleChange = event =>{
        if(event.target.type === "email"){
          setUsername(event.target.value);
        }
        else if(event.target.type ==="password"){
          setPassword(event.target.value)
        }
        
    }

    return (
        <Container fluid = "md">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to = "/register">
            <Button className = "m-1" variant="secondary" type="submit">
                Register
            </Button>
            </Link>
            </Form>
        </Container>
    );
}


  export default Login;