import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ReactModal from 'react-native-modalbox';

export default function CountryModal({
  isOpen,
  closeModal,
  setSelectedCountry,
}) {
  const selectCountry = country => {
    setSelectedCountry(country);
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      swipeToClose
      backButtonClose
      onClosed={closeModal}
      position='top'
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
      <Text style={styles.title}>Select Country</Text>
      <FlatList
        data={require('../assets/phone_codes.json')}
        keyExtractor={item => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => selectCountry(item)}
            activeOpacity={0.8}
            style={styles.listItem}>
            <Text style={{ fontFamily: 'Inter-Regular' }}>
              {item.name} ({item.dial_code})
            </Text>
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
