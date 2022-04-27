import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { inputStyle } from '../constants';
import { Button } from '../components';
import userContext from '../context/user';

export default function Profile() {
  const { user } = useContext(userContext);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/64831126?v=4',
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.pictureInt}>
          synced with facebook profile picture
        </Text>
        <View>
          <Text style={styles.label}>Display Name</Text>
          <TextInput
            style={[inputStyle, { marginBottom: 10 }]}
            clearTextOnFocus
          />
          {user.type == 'runner' && (
            <>
              <Text style={styles.label}> Bio</Text>
              <View style={styles.update}>
                <TextInput
                  multiline
                  numberOfLines={3}
                  textAlignVertical='top'
                  style={inputStyle}
                  clearTextOnFocus
                />
              </View>
            </>
          )}
          <Button title='Update' alternative />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 10,
    alignSelf: 'center',
  },
  pictureInt: {
    fontFamily: 'Inter-Regular',
    color: '#222',
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginTop: 4,
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
    fontFamily: 'Inter-Regular',
  },
  update: {
    marginBottom: 10,
  },
});
