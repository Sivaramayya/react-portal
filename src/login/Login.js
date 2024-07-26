import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import Headers from "../components/Headers";
import Footer from "../components/Footer";


class User {
  constructor(name, phoneNumber, email, password, address, userId) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.address = address;
    this.userId = userId;
  }
}

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });
  const { setUser, setOrderItemsLength, setOrderItems } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9191/user-management/users/login', {
     
        email: loginUser.email,
        password: loginUser.password
      });
      
      console.log(response.data);
      const orderItems = response.data.orderItems;
      const orderItemsLength = response.data.orderItems.length;
      setOrderItemsLength(orderItemsLength);
      setOrderItems(orderItems);
      const user = new User(response.data.name, response.data.phoneNumber, response.data.email,response.data.password,response.data.address,response.data.userId);
      setUser(user);
      navigate("/welcome");
    } catch (err) {
      console.error(err);
      navigate("/login-failed");
    }
  };

  return (
    <>
    <Headers />
    <Container>
      <Form onSubmit={handleLogin} className="mt-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <label >
              <span className="me-2">Username:</span> 
            <input
            type="text"
            value={loginUser.email}
            onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
            placeholder="Enter username"
            required />
          </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <label>
            <span className="me-2">Password:</span>
            <input
            type="password"
            value={loginUser.password}
            onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
            placeholder="Enter password"
            required />
            </label>
          </div>
        </div>  
    
      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-md">Login</button>
        </div>  
      </div>

    </Form>
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-center">
            <p>New User? <Link to="/register"><button type="submit" className="btn btn-warning btn-md">Register</button></Link></p>
          </div>
        </div>    
    </Container>
    <Footer />
  </>

  );
};

export default Login;
