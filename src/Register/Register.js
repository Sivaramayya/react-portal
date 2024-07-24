import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../context/UserContext";
class User {
  constructor(name, phoneNumber, email, password, address) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.address = address;
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
      const user=new User(response.data.email, response.data.address, response.data.id,response.data.name,response.data.phoneNumber);
      setUser(user);
      navigate("/welcome");
    } catch (err) {
      console.error(err); // Log the error for debugging purpose
      navigate("/login-failed");
    }
  };

  return (
    <><form onSubmit={handleRegister}>

      <label>
        Name:
        <input
          type="text"
          value={registerUser.name}
          onChange={(e) => setRegisterUser({ ...registerUser, name: e.target.value })}
          placeholder="Enter name"
          required />

      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={registerUser.phoneNumber}
          onChange={(e) => setRegisterUser({ ...registerUser, phoneNumber: e.target.value })}
          placeholder="Enter phone number"
          required />

      </label>
      <label>
        Email:
        <input
          type="email"
          value={registerUser.email}
          onChange={(e) => setRegisterUser({ ...registerUser, email: e.target.value })}
          placeholder="Enter email"
          required />

      </label>
      <label>
        Password:
        <input
          type="password"
          value={registerUser.password}
          onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })}
          placeholder="Enter password"
          required />

      </label>
      <label>
        Address:
        <input
          type="text"
          value={registerUser.address}
          onChange={(e) => setRegisterUser({ ...registerUser, address: e.target.value })}
          placeholder="Enter address"
          required />
      </label>
      <button type="submit">Register</button>
    </form><p>Already a user? <Link to="/"><button type="submit">LOGIN</button></Link></p></>
     
  );
};

export default Register;
