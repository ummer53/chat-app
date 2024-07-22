import React from 'react';
import {View} from 'react-native';
import RequestContainer from './requests/RequestContainer';
import SuggestionContainer from './suggesstions/SuggestionContainer';

const Requests = () => {
  return (
    <View>
      <RequestContainer />
      <SuggestionContainer />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 4,
//   },
// });
export default Requests;
