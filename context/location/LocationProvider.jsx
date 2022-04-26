import React, { useState } from 'react';
import locationContext from './index';

export default function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  return (
    <locationContext.Provider value={{ location, setLocation }}>
      {children}
    </locationContext.Provider>
  );
}
