import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p><Link to="/Catalogue"><button type="submit">Catalogue</button></Link></p>
    </div>
  );
};

export default Welcome;