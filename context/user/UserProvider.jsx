import React, { useState, useEffect } from 'react';
import userContext from './index';

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
