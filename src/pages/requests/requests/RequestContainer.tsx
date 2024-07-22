import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {users} from '../../../data/users';
import textStyles from '../../../styles/textStyles';
import RequestCard from './RequestCard';

export default class RequestContainer extends Component {
  requests = users.slice(4, 8);
  render() {
    return (
      <View style={styles.requestContainer}>
        <Text style={textStyles.heading}>Requests</Text>
        <View>
          {this.requests.map((user, index) => (
            <RequestCard user={user} key={index} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  requestContainer: {
    padding: 8,
  },
});
