import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Avatar from '../../../components/Avatar';
import buttonStyles from '../../../styles/buttonStyles';
import textStyles from '../../../styles/textStyles';

const SuggestionCard = ({user}: {user: any}) => {
  const onPress = () => {
    console.log('Button pressed');
  };
  return (
    <View style={styles.cardContainer}>
      <Avatar user={user} />
      <View style={styles.nameContainer}>
        <Text style={textStyles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[buttonStyles.primaryButton, styles.button]}>
          <Text style={buttonStyles.primaryButtonText}>Follow </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
  nameContainer: {
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
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
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});

export default SuggestionCard;
