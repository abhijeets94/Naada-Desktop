const INITIAL_STATE = {
  ordersdata: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 
 
    case "EDIT_ORDER":
      return {
        ...state,
        //EDIT FUNCTION
      };

    default:
      return state;
  }
};
export default orderReducer;
