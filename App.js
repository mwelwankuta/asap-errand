import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as NavigationBar from 'expo-navigation-bar';

import UserProvider from './context/user/UserProvider';
import ModalProvider from './context/modal/ModalProvider';
import StackSelector from './StackSelector';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    Billabong: require('./assets/fonts/Billabong.ttf'),
  });

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('white');
    NavigationBar.setButtonStyleAsync('dark');
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='white' />
      <NavigationContainer>
        <UserProvider>
          <ModalProvider>
            <StackSelector />
          </ModalProvider>
        </UserProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
