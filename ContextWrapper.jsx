import React from 'react';
import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './context/user/UserProvider'

export default function ContextWrapper() {
  return (
    <NavigationContainer>
      <UserProvider>
        <MainScreen />
      </UserProvider>
    </NavigationContainer>
  );
}
