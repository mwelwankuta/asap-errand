import React, { useContext } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ErrandHistory, Explore, Map, Messages, Profile, Request } from '../routes';
import { SvgXml as Svg } from 'react-native-svg';

import AuthScreen from './AuthScreen';

import compass from '../assets/icons/compass.svg';
import compass_active from '../assets/icons/compass_active.svg';
import messages from '../assets/icons/messages.svg';
import messages_active from '../assets/icons/messages_active.svg';
import profile from '../assets/icons/profile.svg';
import profile_active from '../assets/icons/profile_active.svg';
import menu from '../assets/icons/menu.svg';
import menu_active from '../assets/icons/menu_active.svg';
import logo from '../assets/asap.svg';
import arrow_back from '../assets/icons/arrow_back.svg';
import modalContext from '../context/modal';
import userContext from '../context/user';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  const { setModalVisible } = useContext(modalContext);
  const { user } = useContext(userContext);

  return (
    <MainStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerShadowVisible: false,
        headerLeft: () =>
          route.params && route.params.title ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Svg xml={arrow_back} height={16} width={22} />
            </TouchableOpacity>
          ) : (
            <Svg xml={logo} height={52} width={56} />
          ),
        headerTitle: () => (
          <Text style={styles.title}>
            {route.params ? route.params.title : ''}
          </Text>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: user && user.image,
              }}
            />
          </TouchableOpacity>
        ),
      })}>
      <MainStack.Screen name='Explore' component={Explore} />
      <MainStack.Screen name='Request' component={Request} />
      <MainStack.Screen name='Map' component={Map} />
    </MainStack.Navigator>
  );
}

const MainTabs = createBottomTabNavigator();

export default function MainScreen() {
  const { setModalVisible } = useContext(modalContext);
  const { user } = useContext(userContext);

  return (
    <MainTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerLeft: () => (
          <Svg xml={logo} height={52} width={56} style={{ marginLeft: 16 }} />
        ),
        headerTitle: () => (
          <Text style={styles.title}>
            {route.params ? route.params.title : ''}
          </Text>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ marginRight: 15.4 }}
            activeOpacity={0.8}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: user.image,
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
        ),
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#ddd',
          borderTopWidth: 0.6,
          shadowColor: 'transparent',
          shadowOpacity: 0,
        },
        tabBarIconStyle: {
          height: 20,
          width: 20,
        },
      })}>
      <MainTabs.Screen
        name='Home'
        component={MainStackScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Svg
              xml={focused ? compass_active : compass}
              width={size}
              height={size}
            />
          ),
        })}
      />
      <MainTabs.Screen
        name='Messages'
        component={Messages}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Svg
              xml={focused ? messages_active : messages}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <MainTabs.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Svg
              xml={focused ? profile_active : profile}
              width={size}
              height={size}
            />
          ),
        }}
      />
      <MainTabs.Screen
        name='Menu'
        component={ErrandHistory}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Svg
              xml={focused ? menu_active : menu}
              width={size}
              height={size}
            />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  userAvatar: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    resizeMode: 'cover',
    marginRight: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
  },
});
