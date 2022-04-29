import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';

import empty_illustration from '../../assets/images/empty_illustration.svg';
import userContext from '../../context/user';

export default function UserView() {
  const { user } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}>
      <Svg xml={empty_illustration} width={'50%'} height={'25%'} />
      <Text style={styles.noMessageLabel}>No Messages</Text>
      <Text style={styles.noMessageDescription}>
        {user.account == 'runner'
          ? 'You have no on-going errand'
          : 'you have no errand request in progress'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noMessageLabel: {
    marginTop: 10,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#222',
  },
  noMessageDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#333',
  },
});
