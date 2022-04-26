import React, { useState } from 'react';
import modalContext from './index';

export default function ModalProvider({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <modalContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </modalContext.Provider>
  );
}
