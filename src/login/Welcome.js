<<<<<<< Updated upstream
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { Link } from 'react-router-dom';

const Welcome = () => {
  const { user, orderItemsLength } = useContext(UserContext);

  return (
    <div>

      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p>Your orders are: {orderItemsLength}</p>
      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p><Link to="/Catalogue"><button type="submit">Catalogue</button></Link></p>
    </div>
  );
=======
import React from 'react';
import OrderCount from '../orderdetails/OrderCount';
import Catalog from '../catalog/Catalog';

const Welcome = () => {
  return(
    <>
     <OrderCount />
     <Catalog />
    </>
 
);
>>>>>>> Stashed changes
};

export default Welcome;
