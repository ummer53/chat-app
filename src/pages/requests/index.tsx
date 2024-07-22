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

export default Requests;
