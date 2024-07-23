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
 // const [loginUser, setLoginUser] = useState({ email: '', password: '' });
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);// accessing context
  const navigate = useNavigate();  //routing

 const handleLogin = () => async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:9191/user-management/users/login', { email, password });
    console.log(response.data);
    setUser(response.data)
    navigate("/welcome");
    
  } catch (err) {
    navigate("/login-failed");
  } 
};
//const user = users.find(user => user.username === loginUser.username && user.password === loginUser.password);
  //   if (user) {
  //     setUser(user);  //update context
  //     navigate("/welcome");
  //   } else {
  //     navigate("/login-failed");
  //   }
  // };

  return (
    <form onSubmit={handleLogin}>
      <label>User name:
      <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" required/> </label>
      <label>Password:
      <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"  required></input>
      
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;