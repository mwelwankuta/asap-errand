import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userContext = createContext(null);
export default userContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const storageUser = await AsyncStorage.getItem("@Asap:user");
    if (storageUser != null) setUser(JSON.parse(storageUser));
  }

  useEffect(() => getUser(), []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
