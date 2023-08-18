import { ADD_NEW_ADDRESS, FETCH_ADDRESS_DETAIL, UPDATE_ADDRESS_DETAIL, DELETE_ADDRESS_DETAIL } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showSuccessToast, showInfoToast } from "../../../Components/universal/Toast";

export const AddNewAddressAPICall = (data) => {

    console.log('check ADD_NEW_ADDRESS headers data : ', data)
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: ADD_NEW_ADDRESS,
            method: 'POST',
            data: data
        })
            .then(async (response) => {
                // console.log('Response from ADD_NEW_ADDRESS api', response, response?.success, response?.success === true)
                console.log('Response from ADD_NEW_ADDRESS api', response)
                if (response?.success === true) {
                    resolve(response)

                    // showInfoToast('SUCCESS', response?.message)
                } else {
                    showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from ADD_NEW_ADDRESS api', error)
                _reject(error)
            })
    })

};


export const FetchAddressAPICall = () => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: FETCH_ADDRESS_DETAIL,
            method: 'GET',
        })
            .then(async (response) => {
                // console.log('Response from ADD_NEW_ADDRESS api', response, response?.success, response?.success === true)
                console.log('Response from FETCH_ADDRESS_DETAIL api', response)
                if (response?.success === true) {
                    
                    //
                    resolve(response)
                // } else {
                //     showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from FETCH_ADDRESS_DETAIL api', error)
                _reject(error)
            })
    })
}



export const updateAddressAPICall = (data) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: UPDATE_ADDRESS_DETAIL,
            method: 'POST',
            data: data
        })
            .then(async (response) => {
                // console.log('Response from ADD_NEW_ADDRESS api', response, response?.success, response?.success === true)
                console.log('Response from UPDATE_ADDRESS_DETAIL api', response)
                if (response?.success === true) {
                    
                //     showInfoToast('SUCCESS', response?.message)
                    resolve(response)

                    // showInfoToast('SUCCESS', response?.message)

                // } else {
                //     showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from UPDATE_ADDRESS_DETAIL api', error)
                _reject(error)
            })
    })
}

export const deleteAddressAPICall = (deleteId) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: `${DELETE_ADDRESS_DETAIL}/${deleteId}`,
            method: 'DELETE',
            // params: {
            //     id: 8
            // }
        })
            .then(async (response) => {
                // console.log('Response from ADD_NEW_ADDRESS api', response, response?.success, response?.success === true)
                console.log('Response from DELETE_ADDRESS_DETAIL api', response)
                if (response?.success === true) {
                    resolve(response)

                    showInfoToast('REMOVE', response?.message)
                // } else {
                //     showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from DELETE_ADDRESS_DETAIL api', error)
                _reject(error)
            })
    })
}