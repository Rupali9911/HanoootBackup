import { CHECK_PHONE_NUMBER, USER_REGISTER } from '../../utility/apiUrls'
import sendRequest from '../../services/axios/AxiosApiRequest'
import { signInWithPhoneNumber } from '../socialAuth'
import { showErrorToast } from '../../Components/universal/Toast'

export const checkPhoneNumber = (formattedNum, phoneNumber) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CHECK_PHONE_NUMBER,
            method: 'POST',
            data: {
                phone_number: formattedNum
            }
        })
            .then(async (response) => {
                console.log('Response from CHECK_PHONE_NUMBER api', response)
                if (response?.sucess === true) {
                    resolve(response)
                    // try {
                    //     const result = await signInWithPhoneNumber(formattedNum)
                    //     if (result)
                    //         resolve(result)
                    // } catch (error) {
                    //     _reject(error)
                    // }
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
                resolve(response)
            })
            .catch(error => {
                console.log('Error from USER_REGISTER api', error)
                _reject(error)
            })
    })

};