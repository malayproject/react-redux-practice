import axios from "axios";
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./UsersActionTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersError = (errorMsg) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: errorMsg,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message));
      });
  };
};
