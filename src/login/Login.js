import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from 'axios';

class User {
  constructor(email, password, id) {
    this.email = email;
    this.password = password;
    this.id = id;
  }
}

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });
  const { setUser } = useContext(UserContext); // Accessing context
  const navigate = useNavigate();  // Routing

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:65082/user-management/users/login', {
        email: loginUser.email,
        password: loginUser.password
      });
      console.log(response.data);
      const user = new User(response.data.email, response.data.password, response.data.id); 
      setUser(user); // Update context
      navigate("/welcome");
    } catch (err) {
      console.error(err); 
      navigate("/login-failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={loginUser.email}
          onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
          placeholder="Enter username"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginUser.password}
          onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
          placeholder="Enter password"
          required
        />
      </label>
      
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
