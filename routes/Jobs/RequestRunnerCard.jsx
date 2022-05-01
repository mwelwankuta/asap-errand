import React from "react";
import {  View, Text, StyleSheet } from "react-native";

export default function RequestRunnerCard() {
  return (
    <View style={styles.container}>
      <Text>Will not be empty forever</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
backgroundColor:'white',
alignItems:'center',
justifyContent:'center'
  }
});
