import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Button(props) {
  const { loading, title, alternative } = props;

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      height: 44,
      justifyContent: 'center',
      backgroundColor: alternative ? '#ddd' : '#1681FF',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: 'rgba(0,0,0,0.23)',
      shadowRadius: 16,
      shadowOffset: {
        height: -2,
        width: -3,
      },
      flex: 1,
    },
    buttonText: {
      color: alternative ? '#222' : 'white',
      fontFamily: 'Inter-SemiBold',
    },
  });

  return (
    <TouchableOpacity {...props} activeOpacity={0.8} style={styles.button}>
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
