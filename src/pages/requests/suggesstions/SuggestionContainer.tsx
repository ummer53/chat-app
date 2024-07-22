import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Avatar from '../../../components/Avatar';
import {users} from '../../../data/users';
import textStyles from '../../../styles/textStyles';

const SuggestionContainer = () => {
  const userList = JSON.parse(JSON.stringify(users));
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={textStyles.heading}>Suggesstions For You</Text>
        {userList.map((user: any, index: React.Key | null | undefined) => (
          <Avatar user={user} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
export default SuggestionContainer;
