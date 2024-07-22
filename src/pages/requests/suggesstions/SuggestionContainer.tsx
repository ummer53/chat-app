import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {users} from '../../../data/users';
import textStyles from '../../../styles/textStyles';
import SuggestionCard from './SuggestionCard';

const SuggestionContainer = () => {
  const userList = JSON.parse(JSON.stringify(users));
  return (
    <View style={styles.container}>
      <Text style={textStyles.heading}>Suggesstions For You</Text>
      {userList.map((user: any, index: React.Key | null | undefined) => (
        <SuggestionCard user={user} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
export default SuggestionContainer;
