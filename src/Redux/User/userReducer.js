 

const INITIAL_STATE = {
  UserSignedIn: false,
  customer: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        UserSignedIn: true,
        customer: action.payload,
      };
  
    default:
      return state;
  }
};
export default userReducer;
