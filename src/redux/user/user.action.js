//functions that return objects formatted as actions should be

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
