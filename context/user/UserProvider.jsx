import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userContext from './index';

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const storageUser = await AsyncStorage.getItem('@Asap:user');
    if (storageUser != null) setUser(JSON.parse(storageUser));
  }

  useEffect(() => getUser(), []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
