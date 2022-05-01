import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";

export default function CustomTabs({ navigationState, position, setIndex }) {
  const inputRange = navigationState.routes.map((_x, i) => i);

  return (
    <View style={styles.tabBar}>
      {navigationState.routes.map((route, i) => {
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          ),
        });

        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={i}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
          >
            <Animated.Text style={[{ opacity }, styles.text]}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderTopColor: "#ddd",
    borderBottomColor: "#ddd",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  tabItem: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
  },
});
