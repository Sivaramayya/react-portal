// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orderItemsLength, setOrderItemsLength] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser, orderItemsLength, setOrderItemsLength }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;