import React, { useContext } from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ErrandHistory, Messages, Profile } from "../routes";
import { SvgXml as Svg } from "react-native-svg";

import HomeScreen from "./HomeScreen";

// asset imports
import compass from "../assets/icons/compass.svg";
import compass_active from "../assets/icons/compass_active.svg";
import messages from "../assets/icons/messages.svg";
import messages_active from "../assets/icons/messages_active.svg";
import profile from "../assets/icons/profile.svg";
import profile_active from "../assets/icons/profile_active.svg";
import menu from "../assets/icons/menu.svg";
import menu_active from "../assets/icons/menu_active.svg";
import logo from "../assets/asap.svg";
import modalContext from "../context/modal";
import userContext from "../context/user";

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const { setModalVisible } = useContext(modalContext);
  const { user } = useContext(userContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerBackVisible: false,
        headerLeft: () => (
          <Svg xml={logo} height={52} width={56} style={{ marginLeft: 16 }} />
        ),
        headerTitle: () => (
          <Text style={styles.title}>
            {route.params ? route.params.title : ""}
          </Text>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ marginRight: 15.4 }}
            activeOpacity={0.8}
          >
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
          borderTopColor: "#ddd",
          borderTopWidth: 0.6,
          shadowColor: "transparent",
          shadowOpacity: 0,
        },
        tabBarIconStyle: {
          height: 20,
          width: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
      <Tab.Screen
        name="Messages"
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
      <Tab.Screen
        name="Profile"
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
      <Tab.Screen
        name="Menu"
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
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  userAvatar: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: "#ddd",
    borderWidth: 1,
    resizeMode: "cover",
    marginRight: 10,
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
  },
});
