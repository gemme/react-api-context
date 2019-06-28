export const reducer =  (state, action) => {
  return {
    'SHOW_MESSAGE': {
      ...state,
      message: action.message,
      type: action.messageType
    }
  }[action.type] || state;
  
};

export const INITIAL_STATE = {
    type: 'INFO',
    message: null
};