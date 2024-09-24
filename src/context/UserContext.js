// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();//Create Context

export const UserProvider = ({ children }) => {  
  //Initial Values in the starting of the context
  const [user, setUser] = useState(null);
  const [orderItemsLength, setOrderItemsLength] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, orderItemsLength, setOrderItemsLength, orderItems, setOrderItems }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
