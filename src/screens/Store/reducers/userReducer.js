import {
    AUTH_SUCCESS,
    UPDATE_NAME_EMAIL
} from '../types'

const initialState = {
    userData: null
}

export default userReducer = (state = initialState, action) => {
    console.log('state from userReducer', state, action?.payload)

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case UPDATE_NAME_EMAIL:
            return {
                ...state,
                userData : {...state.userData, displayName: action?.payload.displayName, email: action?.payload.email}
            }
        default:
            return state;

    }
}