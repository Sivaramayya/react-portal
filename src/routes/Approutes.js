import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "../login/Login";
import Welcome from "../login/Welcome";
import LoginFailed from "../login/LoginFailed";
import Register from '../register/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login-failed" element={<LoginFailed />} />

    </Routes>
  );
};

export default AppRoutes;