import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import ReactModal from 'react-native-modalbox';
import modalContext from '../context/modal';

export default function MenuModal() {
  const { modalVisible, setModalVisible } = useContext(modalContext);
  return (
    <ReactModal
      swipeToClose
      backButtonClose
      backdropPressToClose
      swipeThreshold={0}
      style={styles.container}
      backdropOpacity={0.2}
      position='bottom'
      isOpen={modalVisible}
      onClosed={() => setModalVisible(false)}>
      <SafeAreaView>
        <View
          style={{
            height: 5,
            width: 100,
            borderRadius: 100,
            backgroundColor: '#ddd',
            padding: 2,
            alignSelf: 'center',
            marginTop: 6,
          }}></View>
        <Text style={styles.title}>Menu</Text>
      </SafeAreaView>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
});
