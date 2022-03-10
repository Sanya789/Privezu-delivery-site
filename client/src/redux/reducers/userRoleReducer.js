import { ONE_USER } from "../types/userTypes";

export const userRoleReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ONE_USER:
      return payload;
    default:
      return state;
  }
}
