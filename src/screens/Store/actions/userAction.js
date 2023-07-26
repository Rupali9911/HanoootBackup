import { AUTH_SUCCESS, AUTH_LOGOUT } from "../types";

export const setUserData = data => ({
    type: AUTH_SUCCESS,
    payload: data,
});

export const clearUserData = () => ({
    type: AUTH_LOGOUT
});
