import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const OrderCount = () => {
    const { user, orderItemsLength, orderItems } = useContext(UserContext);
    const [showOrderIds, setShowOrderIds] = useState(false);
  
    const handleClick = () => {
      setShowOrderIds(!showOrderIds);
    };
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {user && <p>Your user ID is: {user.userId}</p>}
      <p>
        <a href="#" onClick={handleClick}>
          Your orders are: {orderItemsLength}
        </a>
      </p>
      {showOrderIds && (
        <ul>
          {orderItems.map((item) => (
            <li key={item.orderId}>Order ID: {item.orderId}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default OrderCount
