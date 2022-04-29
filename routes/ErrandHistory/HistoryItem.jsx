import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import userContext from '../../context/user';

export default function HistoryItem({
  runner_name,
  runner_image,
  hirer_name,
  hirer_image,
  description,
  amount,
}) {
  const { user } = useContext(userContext);
  return (
    <View style={styles.listItem}>
      <View style={styles.imageHolder}>
        <Image
          source={{
            uri:
              user.account && user.account.type == 'standard'
                ? runner_image
                : hirer_image,
            height: 50,
            width: 50,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsHolder}>
        <Text style={styles.name}>
          {user.account && user.account.type == 'standard'
            ? runner_name
            : hirer_name}
          {' • '}
          <Text style={{ fontFamily: 'Inter-SemiBold' }}> {amount} Tokens</Text>
        </Text>
        <Text style={styles.description}>
          {user.account && user.account.type == 'standard' ? description : null}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#222',
  },
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  imageHolder: {
    marginRight: 5,
  },
  image: {
    borderRadius: 100,
  },
  detailsHolder: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#222',
  },
  description: {
    color: '#333',
    fontSize: 13,
    overflow: 'visible',
  },
  clearButton: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#ddd',
    borderRadius: 100,
  },
  clearText: {
    fontFamily: 'Inter-Regular',
    color: '#222',
    fontSize: 13,
  },
});
