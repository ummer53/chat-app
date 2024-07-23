import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {users} from '../../../data/users';
import buttonStyles from '../../../styles/buttonStyles';
import textStyles from '../../../styles/textStyles';
import RequestContext from '../RequestContext';
import SuggestionCard from './SuggestionCard';

const SuggestionContainer = () => {
  const userList = JSON.parse(JSON.stringify(users));

  const {viewAllSuggestions, setViewAllSuggestions} =
    useContext(RequestContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={textStyles.heading}>Suggesstions For You</Text>
        <TouchableOpacity
          style={[styles.button, buttonStyles.secondaryButton]}
          onPress={() => setViewAllSuggestions(!viewAllSuggestions)}>
          <Text style={textStyles.username}>
            {viewAllSuggestions ? 'BACK' : 'VIEW ALL'}
          </Text>
        </TouchableOpacity>
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});
export default SuggestionContainer;
