import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {users} from '../../../data/users';
import textStyles from '../../../styles/textStyles';
import RequestContext from '../RequestContext';
import RequestCard from './RequestCard';

export default function RequestContainer() {
  const incomingRequests = users.slice(4, 8);
  const [requests, setRequests] = React.useState(incomingRequests.slice(0, 1));
  const {viewAllRequests, setViewAllRequests} = useContext(RequestContext);

  console.log(viewAllRequests);

  return (
    <View style={styles.requestContainer}>
      <View style={styles.headerContainer}>
        <Text style={textStyles.heading}>Requests </Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>{incomingRequests.length}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setRequests(
              viewAllRequests ? incomingRequests.slice(0, 1) : incomingRequests,
            );
            setViewAllRequests(!viewAllRequests);
          }}>
          <Text style={textStyles.username}>
            {viewAllRequests ? 'View Less' : 'View All'}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {requests.map((user, index) => (
          <RequestCard user={user} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  requestContainer: {
    padding: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  badgeContainer: {
    backgroundColor: '#EAE0F0',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
