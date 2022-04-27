import React, { useContext } from 'react';
import MenuModal from './components/MenuModal';
import userContext from './context/user';
import { MainScreen, AuthScreen } from './screens';

export default function StackSelector() {
  const { user } = useContext(userContext);
  if (!user) {
    return <AuthScreen />;
  } else {
    return (
      <>
        <MenuModal />
        <MainScreen />
      </>
    );
  }
}
