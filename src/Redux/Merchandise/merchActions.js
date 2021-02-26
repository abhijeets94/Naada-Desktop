export const addMerch = (item) => {
  return {
    type: "ADD_MERCH",
    payload: ITEM,
  };
};
export const deleteMerch = (item) => {
    return {
        type: "DELETE_MERCH",
        payload: item,
    };
}
export const editMerch = (item) => {
  return {
    type: "EDIT_MERCH",
    payload: item,
  };
};
