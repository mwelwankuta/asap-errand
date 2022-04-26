import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Medium' }}>Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});
