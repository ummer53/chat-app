import React, {useState} from 'react';
import {View} from 'react-native';
import RequestContext from './RequestContext';
import RequestContainer from './requests/RequestContainer';
import SuggestionContainer from './suggesstions/SuggestionContainer';

const Requests = () => {
  const [viewAllRequests, setViewAllRequests] = useState<boolean>(false);
  const [viewAllSuggestions, setViewAllSuggestions] = useState<boolean>(false);

  return (
    <View>
      <RequestContext.Provider
        value={{
          viewAllRequests,
          setViewAllRequests,
          viewAllSuggestions,
          setViewAllSuggestions,
        }}>
        {!viewAllSuggestions && <RequestContainer />}
        {!viewAllRequests && <SuggestionContainer />}
      </RequestContext.Provider>
    </View>
  );
};

export default Requests;
