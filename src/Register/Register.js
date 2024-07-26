import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../context/UserContext";
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

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: ''
  });
  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate();  // Routing

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9191/user-management/users', {
        name: registerUser.name,
        phoneNumber: registerUser.phoneNumber,
        email: registerUser.email,
        password: registerUser.password,
        address: registerUser.address
      });
      console.log(response.data);
      const user=new User(response.data.name, response.data.phoneNumber, response.data.email,response.data.password,response.data.address, response.data.userId);
      setUser(user);
      navigate("/welcome");
    } catch (err) {
      console.error(err); // Log the error for debugging purpose
      navigate("/login-failed");
    }
  };

  return (
    <>
    <Headers />
    <Container>
        <Form onSubmit={handleRegister} className="mt-5">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <label>
                <span className="me-2">Name:</span>
                <input
                  type="text"
                  value={registerUser.name}
                  onChange={(e) => setRegisterUser({ ...registerUser, name: e.target.value })}
                  placeholder="Enter name"
                  required />

              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-center">   
              <label>
              <span className="me-2">Mobile:</span>
                <input
                  type="text"
                  value={registerUser.phoneNumber}
                  onChange={(e) => setRegisterUser({ ...registerUser, phoneNumber: e.target.value })}
                  placeholder="Enter phone number"
                  required />
              </label>
            </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">  
                <label>   
                  <span className="me-2">Email:</span> 
                  <input
                    type="email"
                    value={registerUser.email}
                    onChange={(e) => setRegisterUser({ ...registerUser, email: e.target.value })}
                    placeholder="Enter email"
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
                    value={registerUser.password}
                    onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })}
                    placeholder="Enter password"
                    required />
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">      
                <label>
                <span className="me-2">Address:</span>
                  <input
                    type="text"
                    value={registerUser.address}
                    onChange={(e) => setRegisterUser({ ...registerUser, address: e.target.value })}
                    placeholder="Enter address"
                    required />
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">    
                <button type="submit" className="btn btn-primary btn-md">Register</button>
              </div>
            </div>    
        </Form>
    <div className="row mt-3">
      <div className="col-md-12 d-flex justify-content-center">
        <p>Already a user? <Link to="/"><button type="submit" className="btn btn-warning btn-md">LOGIN</button></Link></p>
      </div>
    </div>    
    </Container>

    <Footer />
    </>
     
  );
};

export default Register;
