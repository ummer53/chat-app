import React, {createContext} from 'react';

const RequestContext = createContext({} as RequestContextType);

export interface RequestContextType {
  viewAllRequests: boolean;
  setViewAllRequests: React.Dispatch<React.SetStateAction<boolean>>;
  viewAllSuggestions: boolean;
  setViewAllSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
}

export default RequestContext;
