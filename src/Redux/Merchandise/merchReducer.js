const INITIAL_STATE = {
    merchData:[]
};

const merchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MERCH":
      return {
        ...state,
        //ADD FUNCTION
      };
    case "DELETE_MERCH":
      return {
        ...state,
         //DELETE FUNCTION
      };
    case "EDIT_MERCH":
      return {
        ...state,
        //EDIT FUNCTION
      };

    default:
      return state;
  }
};
export default merchReducer;
