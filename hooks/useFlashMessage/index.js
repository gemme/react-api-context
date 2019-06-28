import React, { createContext, useReducer, useContext, useEffect } from 'react';
import {reducer, INITIAL_STATE} from './reducer';
import FlashMessage from '../../sharedComponents/FlashMessage';

const AppContext = createContext();

export const FlashMessageProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {message, type} = state;

  const showMessage = (message, messageType) => {
    dispatch({
      type: 'SHOW_MESSAGE',
      message,
      messageType
    })
  };

  const showError = (message) => {
      showMessage(message, 'ERROR');
  };

  const showInfo = (message) => {
      showMessage(message, 'INFO');
  };

  const removeMessage = () => {
      showMessage(null, null);
      console.log('was removed');
  };

  return (
    <AppContext.Provider value={
      {
        ...state,
        showMessage,
        showError,
        showInfo,
        removeMessage
      }
    }>
      {children}
      {message && <FlashMessage message={message} type={type} removeMessage={removeMessage}/>}
    </AppContext.Provider>
  );

};


export const useFlashMessageContext = () => useContext(AppContext);
