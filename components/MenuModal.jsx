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
      position='bottom'
      isOpen={modalVisible}
      onClosed={() => setModalVisible(false)}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity>
            <AntDesign name='down' size={24} color='#888' />
          </TouchableOpacity>
          <Text style={styles.title}>Menu</Text>
        </View>
      </SafeAreaView>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
