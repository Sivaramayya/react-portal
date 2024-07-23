import React from 'react';
import { Link } from 'react-router-dom';

const LoginFailedPage = () => {
  return (
    <div>
      <h1>Login Failed</h1>
      <p>Please try again or <Link to="/register">register</Link>.</p>
    </div>
  );
};

export default LoginFailedPage;