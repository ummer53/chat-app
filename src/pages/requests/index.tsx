import React, {useState} from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import RequestContext from './RequestContext';
import RequestContainer from './requests/RequestContainer';
import SuggestionContainer from './suggesstions/SuggestionContainer';

const Requests = () => {
  const [viewAllRequests, setViewAllRequests] = useState<boolean>(false);
  const [viewAllSuggestions, setViewAllSuggestions] = useState<boolean>(false);

  return (
    <RequestContext.Provider
      value={{
        viewAllRequests,
        setViewAllRequests,
        viewAllSuggestions,
        setViewAllSuggestions,
      }}>
      <MainLayout>
        {!viewAllSuggestions && <RequestContainer />}
        {!viewAllRequests && <SuggestionContainer />}
      </MainLayout>
    </RequestContext.Provider>
  );
};

export default Requests;
