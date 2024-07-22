import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import imageStyles from '../styles/imageStyles';
export default function Avatar({user}: {user: any}) {
  const defaultAvatar = require('../assets/default-avatar.jpg');

  return (
    <View>
      <View style={styles.avatarContainer}>
        <Image
          source={user.image || defaultAvatar}
          style={imageStyles.avatarImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
  },
});
