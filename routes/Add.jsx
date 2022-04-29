import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Add() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Medium' }}>Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});
