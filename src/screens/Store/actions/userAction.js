import { AUTH_SUCCESS, AUTH_LOGOUT, UPDATE_NAME_EMAIL } from "../types";
import sendRequest from "../../../services/axios/AxiosApiRequest";
import { DEEP_LINKING_PRODUCTS_API_CALL } from "../../../utility/apiUrls";

export const setUserData = data => ({
    type: AUTH_SUCCESS,
    payload: data,
});

export const updateNameEmail = data => ({
    type: UPDATE_NAME_EMAIL,
    payload: data,
});

export const clearUserData = () => ({
    type: AUTH_LOGOUT
});



export const getDeepLinkProducts = data => dispatch =>
    new Promise(async (resolve, reject) => {
        sendRequest({
            url: DEEP_LINKING_PRODUCTS_API_CALL,
            method: 'GET',
            params: {
                key: data
            },
        })
            .then(response => {
                console.log('Response from DEEP_LINKING_PRODUCTS_API_CALL ', response);
                resolve(response);

            })
            .catch(err => {
                console.log('Error from DEEP_LINKING_PRODUCTS_API_CALL ', err);
                reject(err);
            });
    });