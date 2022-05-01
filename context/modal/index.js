import React, { useState, createContext } from "react";

const modalContext = createContext(null);
export default modalContext;

export function ModalProvider({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <modalContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </modalContext.Provider>
  );
}
