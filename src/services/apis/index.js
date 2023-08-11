import { CHECK_PHONE_NUMBER, USER_REGISTER, UPDATE_PROFILE, HELPNSUPPORT } from '../../utility/apiUrls'
import sendRequest from '../../services/axios/AxiosApiRequest'
import { showErrorToast, showSuccessToast } from '../../Components/universal/Toast'

export const checkPhoneNumberOrEmailExists = (numberOrEmail) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CHECK_PHONE_NUMBER,
            method: 'POST',
            data: {
                phone_number: numberOrEmail
            }
        })
            .then(async (response) => {
                console.log('Response from CHECK_PHONE_NUMBER api', response, response?.success, response?.success === true)
                if (response?.success === true) {
                    resolve(response)
                } else {
                    showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from CHECK_PHONE_NUMBER api', error)
                _reject(error)
            })
    })

};

export const userRegister = (firebase_user_id, password) => {
    return new Promise((resolve, _reject) => {
        console.log('firebase_user_id', firebase_user_id)
        console.log('password', password)
        console.log('USER_REGISTER', USER_REGISTER)
        sendRequest({
            url: USER_REGISTER,
            method: 'POST',
            data: {
                firebase_user_id: firebase_user_id,
                password: password
            }
        })
            .then((response) => {
                console.log('Response from USER_REGISTER api', response)
                if (response?.success === true) {
                    resolve(response)
                } else {
                    showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from USER_REGISTER api', error)
                _reject(error)
            })
    })

};

export const updateProfile = (name, email) => {
    return new Promise((resolve, _reject) => {
        console.log('name', name)
        console.log('email', email)
        sendRequest({
            url: UPDATE_PROFILE,
            method: 'POST',
            data: {
                full_name: name,
                email: email
            }
        })
            .then((response) => {
                console.log('Response from UPDATE_PROFILE api', response)
                if (response?.success === true) {
                    resolve(response)
                } else {
                    showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from UPDATE_PROFILE api', error)
                _reject(error)
            })
    })

};

export const helpNSupport = (name, email, description) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: HELPNSUPPORT,
            method: 'POST',
            data: {
                name: name ? name : 'Test User',
                email: email,
                description: description
            }
        })
            .then((response) => {
                console.log('Response from HELPNSUPPORT api', response)
                if (response?.success === true) {
                    showSuccessToast('Help & Support', 'Query Submitted Successfully')
                    resolve(response)
                } else {
                    showErrorToast('Auth Error', response?.message)
                }
            })
            .catch(error => {
                console.log('Error from HELPNSUPPORT api', error)
                _reject(error)
            })
    })

};