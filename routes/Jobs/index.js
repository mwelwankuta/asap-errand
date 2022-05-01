import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Jobs() {
  return (
    <View style={styles.container}>
      <Text>Will not always be empty </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
