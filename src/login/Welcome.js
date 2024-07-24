import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Welcome = () => {
  const { user, orderItemsLength } = useContext(UserContext);

  return (
    <div>
<<<<<<< Updated upstream
      <h1>Welcome to the application!</h1>
      {user && <p>Your user ID is: {user.id}</p>}
=======
      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p>Your orders are: {orderItemsLength}</p>
>>>>>>> Stashed changes
    </div>
  );
};

export default Welcome;
