import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {users} from '../../../data/users';
import buttonStyles from '../../../styles/buttonStyles';
import textStyles from '../../../styles/textStyles';
import RequestContext from '../RequestContext';
import RequestCard from './RequestCard';

export default function RequestContainer() {
  const incomingRequests = users.slice(4, 8);
  const [requests, setRequests] = React.useState(incomingRequests.slice(0, 2));
  const {viewAllRequests, setViewAllRequests} = useContext(RequestContext);

  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <View style={styles.requestContainer}>
          <Text style={textStyles.heading}>Requests </Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>{incomingRequests.length}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[buttonStyles.secondaryButton, styles.button]}
          onPress={() => {
            setRequests(
              viewAllRequests ? incomingRequests.slice(0, 2) : incomingRequests,
            );
            setViewAllRequests(!viewAllRequests);
          }}>
          <Text style={textStyles.username}>
            {viewAllRequests ? 'BACK' : 'VIEW ALL'}
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
  Container: {
    padding: 8,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});
