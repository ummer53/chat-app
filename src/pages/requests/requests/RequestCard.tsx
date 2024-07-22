import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Avatar from '../../../components/Avatar';
import buttonStyles from '../../../styles/buttonStyles';
import textStyles from '../../../styles/textStyles';

export default function RequestCard({user}: {user: any}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Avatar user={user} />
        <Text>
          <Text style={[textStyles.name]}>{user.name}</Text> wants to connect
          with you
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[buttonStyles.primaryButton, styles.button]}>
          <Text style={buttonStyles.primaryButtonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, buttonStyles.secondaryButton]}>
          <Text style={buttonStyles.secondaryButtonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#EAE0F0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAE0C5',
    padding: 4,
    gap: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
});
