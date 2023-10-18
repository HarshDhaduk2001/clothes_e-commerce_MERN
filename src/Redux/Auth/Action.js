import axios from "axios";
import { API_BAST_URL } from "../../config/apiConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, psyload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BAST_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.token) {
      localStorage.setItem("token", user.token);
    }

    dispatch(registerSuccess(user.token));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, psyload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BAST_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.token) {
      localStorage.setItem("token", user.token);
    }
    dispatch(loginSuccess(user.token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, psyload: error });

export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const token = await localStorage.getItem("token");
    const response = await axios.get(`${API_BAST_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
};
