import { OK } from "http-status";
import axiosInstance from "../services/axios";

export const UPDATE_USER = "UPDATE_USER";

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user
  };
};

export function connectUser(payload) {
  return async dispatch => {
    const { status, data } = await axiosInstance.connectUser(payload);

    let user = Object.assign({}, data);

    if (status === OK) {
      const { data: me } = await axiosInstance.getUser(user.token);

      user = Object.assign(user, me);

      dispatch(updateUser(user));
    }
  };
}
