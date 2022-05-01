import React, { useContext, useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Explore, Map, Request, Jobs, SearchLocation } from "../routes";
import { SvgXml as Svg } from "react-native-svg";
import { MenuModal, LocationDisabledMessage, CustomTabs } from "../components";
import { SceneMap, TabView } from "react-native-tab-view";

import logo from "../assets/asap.svg";
import arrow_back from "../assets/icons/arrow_back.svg";
import modalContext from "../context/modal";
import userContext from "../context/user";

const HomeStack = createNativeStackNavigator();

const screenOptions = ({ route, navigation }) => {
  const { setModalVisible } = useContext(modalContext);
  const { user } = useContext(userContext);

  return {
    headerTitleAlign: "center",
    headerBackVisible: false,
    headerShadowVisible: false,
    headerLeft: () =>
      route.params && route.params.title ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Svg xml={arrow_back} height={16} width={22} />
        </TouchableOpacity>
      ) : (
        <Svg xml={logo} height={52} width={56} />
      ),
    headerTitle: () => (
      <Text style={styles.title}>{route.params ? route.params.title : ""}</Text>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
      >
        <Image
          style={styles.userAvatar}
          source={{
            uri: user && user.image,
          }}
        />
      </TouchableOpacity>
    ),
  };
};

export default function HomeScreen() {
  return (
    <>
      <HomeStack.Navigator screenOptions={screenOptions}>
        <HomeStack.Screen name="Explore" component={HomeTabs} />
        <HomeStack.Screen name="Request" component={Request} />
        <HomeStack.Screen name="SearchLocation" component={SearchLocation} />
        <HomeStack.Screen name="Map" component={Map} />
      </HomeStack.Navigator>
      <MenuModal />
      <LocationDisabledMessage />
    </>
  );
}

function HomeTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Jobs" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      keyboardDismissMode
      renderScene={SceneMap({
        first: Explore,
        second: Jobs,
      })}
      renderTabBar={(props) => <CustomTabs {...props} setIndex={setIndex} />}
    />
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
