import {
    AUTH_SUCCESS
} from '../types'

const initialState = {
    userData: null
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.payload.data
            }
        default:
            return state;

    }
}