import {
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from '../types'

const initialState = {
    userData: null
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                userData: null
            }
        default:
            return state;

    }
}