import { OK } from "http-status";
import axiosInstance from "../services/axios";

export const GET_USER = "GET_USER";

export const setUser = user => {
  return {
    type: GET_USER,
    user
  };
};

export function connectUser(payload) {
  return async dispatch => {
    const { status, data } = await axiosInstance.connectUser(payload);

    let user = Object.assign({}, data);

    if (status === OK) {
      const { status: statusMe, data: me } = await axiosInstance.getUser(
        user.token
      );

      user = Object.assign(user, me);
    }

    dispatch(setUser(user));
  };
}
