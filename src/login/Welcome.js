import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
    </div>
  );
};

export default Welcome;