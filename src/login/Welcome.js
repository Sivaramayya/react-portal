import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to the application!</h1>
      {user && <p>Your user ID is: {user.id}</p>}
    </div>
  );
};

export default Welcome;