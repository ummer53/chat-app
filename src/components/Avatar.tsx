import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import imageStyles from '../styles/imageStyles';
export default function Avatar({user}: {user: any}) {
  const defaultAvatar = require('../assets/default-avatar.jpg');
  const onPress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={user.image || defaultAvatar}
          style={imageStyles.avatarImage}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={{color: 'white'}}>Follow </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAE0F0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAE0C5',
    padding: 4,
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
  },
  avatarContainer: {
    flex: 1,
  },
  nameContainer: {
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
  },
  name: {
    color: '#2C3335',
    fontSize: 14,
  },
  username: {
    color: '#535C68',
    fontSize: 12,
  },
  actionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3C40C6',
    padding: 8,
    borderRadius: 20,
    color: 'white',
  },
});
