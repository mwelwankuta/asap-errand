import React, { useState, useContext, Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

import {
  BudgetProducts,
  Category,
  CreateAccount,
  CreateBudget,
  Home,
  Login,
  Market,
  MarketDetails,
  Product,
} from '../routes';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../constants';
import userContext from '../context/user';

const Header = () => (
  <SafeAreaView>
    <View style={styles.nav}>
      {/* <TouchableHighlight style={styles.menu}>
        <MaterialIcons name='menu' color={colors.purpleColor} size={30} />
      </TouchableHighlight> */}
      <Text style={styles.title}>MyBudget App</Text>
    </View>
  </SafeAreaView>
);

const TabBar = () => {
  const [keyboardShowing, setKeyboardShowing] = useState(false);
  const navigation = useNavigation();
  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardShowing(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardShowing(false);
  });

  if (keyboardShowing) {
    return <Fragment />;
  } else
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.tabItem}
          activeOpacity={0.8}>
          <MaterialIcons name='home' color='#999' size={35} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateBudget')}
          style={styles.floatingBtn}
          activeOpacity={0.8}>
          <MaterialCommunityIcons name='plus' color='white' size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MarketStack', { screen: 'Market' })
          }
          style={styles.tabItem}
          activeOpacity={0.8}>
          <MaterialIcons name='amp-stories' color='#999' size={35} />
          <Text style={styles.tabText}>Market</Text>
        </TouchableOpacity>
      </View>
    );
};
const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Category' component={Category} />
    <Stack.Screen name='CreateBudget' component={CreateBudget} />
    <Stack.Screen name='BudgetProducts' component={BudgetProducts} />
  </Stack.Navigator>
);

const MStack = createNativeStackNavigator();

const MarketStack = () => (
  <MStack.Navigator screenOptions={{ headerShown: false }}>
    <MStack.Screen name='Market' component={Market} />
    <MStack.Screen name='MarketDetails' component={MarketDetails} />
    <MStack.Screen name='Product' component={Product} />
  </MStack.Navigator>
);

const AStack = createNativeStackNavigator();

const AuthStack = () => (
  <AStack.Navigator screenOptions={{ headerShown: false }}>
    <AStack.Screen name='Login' component={Login} />
    <AStack.Screen name='CreateAccount' component={CreateAccount} />
  </AStack.Navigator>
);

const Tabs = createBottomTabNavigator();

export default function MainScreen() {
  const { user } = useContext(userContext);
  return (
    <Tabs.Navigator
      tabBar={() => (user ? <TabBar /> : null)}
      screenOptions={{
        header: () => <Header />,
        headerShown: user != null,
      }}>
      {!user && <Tabs.Screen name='AuthStack' component={AuthStack} />}
      <Tabs.Screen name='Main' component={StackNavigation} />
      <Tabs.Screen name='MarketStack' component={MarketStack} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  nav: {
    padding: 10,
    borderBottomColor: colors.purpleColor,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.purpleColor,
    flex: 1,
  },
  menu: {
    borderRadius: 100,
  },
  tabBar: {
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    paddingTop: 7,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#888',
    fontWeight: '600',
    fontSize: 12,
    marginTop: -5,
  },
  floatingBtn: {
    backgroundColor: colors.purpleColor,
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    top: -20,
    left: '42%',
  },
});
