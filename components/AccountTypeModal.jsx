import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ReactModal from 'react-native-modalbox';

export default function AccountTypeModal({
  isOpen,
  closeModal,
  setSelectedAccount,
}) {
  const selectedAccount = type => {
    setSelectedAccount(type);
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      swipeToClose
      backButtonClose
      onClosed={closeModal}
      position='bottom'
      style={styles.container}
      coverScreen={false}>
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
      <Text style={styles.title}>Select Account Type</Text>
      <FlatList
        data={[{ name: 'Standard' }, { name: 'Errand Runner' }]}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => selectedAccount(item.name)}
            activeOpacity={0.8}
            style={styles.listItem}>
            <Text style={{ fontFamily: 'Inter-Regular' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    height:'60%'
  },
  listItem: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    padding: 20,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
  },
});
