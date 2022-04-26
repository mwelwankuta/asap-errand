import React, { useContext } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Explore, Map, Messages, Profile, Request, Welcome } from '../routes';
import { SvgXml as Svg } from 'react-native-svg';

import compass from '../assets/icons/compass.svg';
import compass_active from '../assets/icons/compass_active.svg';
import messages from '../assets/icons/messages.svg';
import messages_active from '../assets/icons/messages_active.svg';
import plus from '../assets/icons/plus.svg';
import plus_active from '../assets/icons/plus.svg';
import profile from '../assets/icons/profile.svg';
import profile_active from '../assets/icons/profile_active.svg';
import menu from '../assets/icons/menu.svg';
import menu_active from '../assets/icons/menu_active.svg';
import logo from '../assets/asap.svg';
import arrow_back from '../assets/icons/arrow_back.svg';
import Add from '../routes/Add';
import modalContext from '../context/modal';

const AuthStack = createNativeStackNavigator();

function AuthScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Welcome' component={Welcome} />
    </AuthStack.Navigator>
  );
}

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
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
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.8}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/64831126?v=4',
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

function MainScreen() {
  const { setModalVisible } = useContext(modalContext);

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
            style={{ marginRight: 15.4 }}
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.8}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/64831126?v=4',
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
          height: 24,
          width: 24,
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
        name='Add'
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <Svg xml={focused ? plus_active : plus} width={22} height={22} />
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
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Svg
                xml={focused ? menu_active : menu}
                width={size}
                height={size}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </MainTabs.Navigator>
  );
}

export { MainScreen, AuthScreen };
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
