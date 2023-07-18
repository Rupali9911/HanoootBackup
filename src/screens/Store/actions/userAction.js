import { AUTH_SUCCESS } from "../types";

export const setUserData = data => ({
    type: AUTH_SUCCESS,
    payload: data,
});
