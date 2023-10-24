const initialState = {
  username: '',
  firstname: '',
  lastname: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    default:
      return state;
  }
};

export default userReducer;