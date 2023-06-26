import { ADDRESS_DETAIL } from "../types";
import { REMOVE_ADDRESS } from "../types";
import { UPDATE_ADDRESS } from "../types";

export const setAddressDetails = data => {
    return {
        type: ADDRESS_DETAIL,
        payload: data
    }
}

export const removeAddress = remove => {
    return {
        type: REMOVE_ADDRESS,
        payload: remove
    }
}


export const updateAddress = update => {
    return {
        type: UPDATE_ADDRESS,
        payload: update
    }
}