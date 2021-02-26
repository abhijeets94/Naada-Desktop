const INITIAL_STATE = {
  eventData: [],
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        //ADD FUNCTION
      };
    case "DELETE_EVENT":
      return {
        ...state,
        //DELETE FUNCTION
      };
    case "EDIT_EVENT":
      return {
        ...state,
        //EDIT FUNCTION
      };

    default:
      return state;
  }
};
export default eventReducer;
