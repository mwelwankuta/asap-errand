import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ContextWrapper from './ContextWrapper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='white' />
      <ContextWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
