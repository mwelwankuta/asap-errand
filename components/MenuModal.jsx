import React, { useContext } from 'react';
import {
  View,
  Text,
  Linking,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
} from 'react-native';
import ReactModal from 'react-native-modalbox';

import Button from './Button';
import modalContext from '../context/modal';
import userContext from '../context/user';

import { developerEmail } from '../constants';
import { useNavigation } from '@react-navigation/native';

function ListItem({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default function MenuModal() {
  const navigation = useNavigation();
  const { modalVisible, setModalVisible } = useContext(modalContext);

  const { setUser, user } = useContext(userContext);

  const logout = () => {
    Alert.alert('Logout', 'are you sure you want to logout', [
      {
        title: 'No',
        onPress: () => null
      },
      {
        title: 'Yes',
        style: 'destructive',
        onPress: () => setUser(null),
      },
    ]);
  };

  const share = () => {
    setModalVisible(false);
    Share.share(
      {
        title: 'Invite a friend',
        message:
          'Download the app and be able to find someone to ran your errands within minutes. https://play.google.com/store/apps/details?id=com.asaperrand.app',
        url: 'https://play.google.com/store/apps/details?id=com.asaperrand.app',
      },
      {
        dialogTitle: 'Invite a friend',
        excludedActivityTypes: ['com.apple.UIKit.activity.SaveToCameraRoll'],
      }
    );
  };

  const feedback = async () => {
    setModalVisible(false);
    await Linking.openURL(
      `mailto:${developerEmail}?subject=asap%20errand%20|%20user%20feedback`
    );
  };

  const profile = () => {
    setModalVisible(false);
    navigation.navigate('Profile');
  };

  return (
    <ReactModal
      swipeToClose
      backButtonClose
      backdropPressToClose
      swipeThreshold={50}
      style={styles.container}
      backdropOpacity={0.2}
      position='top'
      isOpen={modalVisible}
      onClosed={() => setModalVisible(false)}>
      <View style={{ flex: 1 }}>
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
        <TouchableOpacity
          onPress={profile}
          activeOpacity={0.8}
          style={[styles.listItem, styles.user]}>
          <View>
            <Image
              source={{ uri: user.image, height: 70, width: 70 }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.account}>
              {user.account && user.account.name}
            </Text>
          </View>
        </TouchableOpacity>
        <ListItem text={'Invite a friend'} onPress={share} />
        <ListItem text={'Give Feedback'} onPress={feedback} />
        <View style={{ height: 40 }}>
          <Button alternative title='Logout' onPress={logout} />
        </View>
      </View>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 'auto',
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  listItem: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    paddingVertical: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#222',
  },
  account: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#333',
  },
});
