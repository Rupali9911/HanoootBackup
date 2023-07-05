import { ADDRESS_DETAIL } from "../types";
import { REMOVE_ADDRESS } from "../types";
import { UPDATE_ADDRESS } from "../types";

const initialState = {
    ADDRESS_DETAIL: [],
    addressType: ''
}

const checkoutReducer = (state = initialState, action) => {
    // console.log('Check reducer state and action : ', state, '********Action Call*******', action)
    switch (action.type) {
        case ADDRESS_DETAIL:
            return {
                ...state,
                // ADDRESS_DETAIL: [...state.ADDRESS_DETAIL, ...action.payload]
                ADDRESS_DETAIL: [...state.ADDRESS_DETAIL, {
                    id: `id_${Math.floor(Math.random() * 100) + 1}`,
                    Value: action.payload
                }],
                addressType: 'Add_NEW_ADDRESS'
            }
        case REMOVE_ADDRESS:
            console.log('action.payload : ', action.payload)
            return {
                ...state,
                ADDRESS_DETAIL: [
                    ...state.ADDRESS_DETAIL.filter(item => item.id !== action.payload.id)
                ],
                addressType: 'REMOVE_ADDRESS'
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
                    (content, i) =>

                        content.id === action.payload.updateId
                            ?
                            {
                                ...content,
                                Value: action.payload.updateData,
                            }
                            : content
                ),

                addressType: 'UPDATE_ADDRESS'
            }
        default:
            return state;
    }
}

export default checkoutReducer;