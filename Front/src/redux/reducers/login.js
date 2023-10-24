const initialState = {
  token: null, //token initially empty
  error: null
};

const authReducer = (state = initialState, action) => { // Use a switch instruction to determine how to update the state according to the action
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token, // Update token with new token from action
        error: null
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        token: '',
        error: action.payload.error
      };
    case 'LOGOUT':
        return {
        ...state,
        token:null,
        error:null,
        }
    default:
      return state; // Simply returns the current state without modifying it
  }
};

export default authReducer;