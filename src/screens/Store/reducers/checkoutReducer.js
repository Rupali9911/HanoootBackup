import { ADDRESS_DETAIL } from "../types";
import { REMOVE_ADDRESS } from "../types";
import { UPDATE_ADDRESS } from "../types";

const initialState = {
    ADDRESS_DETAIL: []
}

const checkoutReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, action)
    switch (action.type) {
        case ADDRESS_DETAIL:
            return {
                ...state,
                // ADDRESS_DETAIL: [...state.ADDRESS_DETAIL, ...action.payload]
                ADDRESS_DETAIL: [...state.ADDRESS_DETAIL, {
                    id: `id_${Math.floor(Math.random() * 100) + 1}`,
                    Value: action.payload
                }]
            }
        case REMOVE_ADDRESS:
            console.log('action.payload : ', action.payload)
            return {
                ...state,
                ADDRESS_DETAIL: [
                    ...state.ADDRESS_DETAIL.filter(item => item.id !== action.payload.id)
                ],
            }
        case UPDATE_ADDRESS:
            
            return {
                ...state,
                // ADDRESS_DETAIL: [
                //     state.ADDRESS_DETAIL.slice(0,action.payload.editId),
                //     {
                //         id: action.payload.editId,
                //         Value: action.payload.editData
                //     },
                //     state.ADDRESS_DETAIL.slice(0,action.payload.editId)
                //   ],
                ADDRESS_DETAIL: state.ADDRESS_DETAIL.map(
                    (content, i) => content.id === action.payload.editId ? { ...content, Value: action.payload.editData }
                        : content
                )


            }
        default:
            return state;
    }
}

export default checkoutReducer;