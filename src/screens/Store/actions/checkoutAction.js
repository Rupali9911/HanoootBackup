import { ADDRESS_DETAIL, FETCH_PARTICULAR_ADDRESS } from "../types";
import { REMOVE_ADDRESS } from "../types";
import { UPDATE_ADDRESS } from "../types";
import { AddNewAddressAPICall, FetchAddressAPICall, updateAddressAPICall, deleteAddressAPICall, FetchSelectedAddressAPICall } from "../../../services/apis/AddressAPI";
import { showInfoToast } from "../../../Components/universal/Toast";

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

export const fetchSingleAddress = data => {
    return {
        type: FETCH_PARTICULAR_ADDRESS,
        payload: data
    }
}


// export const updateAddress = update => {
//     return {
//         type: UPDATE_ADDRESS,
//         payload: update
//     }
// }


export const addNewAddress = (inputData) => {

    const data = {
        city: inputData?.countryName,
        street: inputData?.streetName,
        building: inputData?.buildingType,
        house: inputData?.houseFlatNo,
        landmark: inputData?.nearByLandMark,
        latitude: "189.98.89",
        longitude: "31238.3213",
        name: inputData?.name,
        phone_number: inputData?.phoneNo,
        address_type: inputData?.saveAddAs
    }


    return async dispatch => {
        try {
            await AddNewAddressAPICall(data)

            // navigation.navigate('');
            // console.log('Error from Add new address api', error)
        }
        catch (error) {
            console.log('Error from Add new address api', error)
        }
    };
}


export const fetchAddressDetails = () => {
    return async dispatch => {
        try {
            await FetchAddressAPICall().
                then(async(response) => {
                    console.log('response from fetch address detail api', response)
                    if (response?.data) {
                        await dispatch(setAddressDetails(response?.data))
                    }
                }).
                catch((err) => {
                    { console.log('response from fetch address detail api', err) }
                })
        }
        catch (error) {
            console.log('Error from Add new address api', error)
        }
    };
}


export const updateAddressDetails = (updateData) => {
    const data = {
        city: updateData?.countryName?.name,
        street: updateData?.streetName,
        building: updateData?.buildingType,
        house: updateData?.houseFlatNo,
        landmark: updateData?.nearByLandMark,
        latitude: "189.98.89",
        longitude: "31238.3213",
        name: updateData?.name,
        phone_number: updateData?.phoneNo,
        address_type: updateData?.saveAddAs,
        id: updateData?.id
    }
    return async dispatch => {
        try {
            await updateAddressAPICall(data)
        }
        catch (error) {
            console.log('Error from Add new address api', error)
        }
    };
}


export const removeAddressDetails = (Deleteid) => {
    // console.log('check id : ', Deleteid)
    // return async dispatch => {
    return async (dispatch, getState) => {
        // try {
            await deleteAddressAPICall(Deleteid).
            then(async (response) => {
                console.log('response from remove address api', response)
                if(response?.success === true){
                    // dispatch(setAddressDetails(response?.data))

                    await dispatch(fetchAddressDetails());

                    showInfoToast('REMOVE', response?.message)
                    
                }
            }).
            catch((err) => {
                { console.log('response from remove address api error', err) }
            })
        // }
        // catch (error) {
        //     console.log('Error from Add new address api', error)
        // }
    };
}



export const getParticularSelectedAddress = (addId) => {
    return async dispatch => {
        try {
            await FetchSelectedAddressAPICall(addId).
                then(async(response) => {
                    console.log('response from fetch selected address detail api', response)
                    if (response?.data) {
                        await dispatch(fetchSingleAddress(response?.data))
                    }
                }).
                catch((err) => {
                    { console.log('response from fetch selected address detail api', err) }
                })
        }
        catch (error) {
            console.log('Error from fetch selected address detail api call ', error)
        }
    };
}
