export const addEvent = (item) => {
  return {
    type: "ADD_EVENT",
    payload: ITEM,
  };
};
export const deleteEvent = (item) => {
  return {
    type: "DELETE_EVENT",
    payload: item,
  };
};
export const editEvent = (item) => {
  return {
    type: "EDIT_EVENT",
    payload: item,
  };
};
