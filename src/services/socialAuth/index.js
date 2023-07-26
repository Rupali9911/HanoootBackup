

import auth from '@react-native-firebase/auth';
import { GOOGLE_CLIENT_ID } from '../../utility/apiUrls'
import appleAuth from '@invertase/react-native-apple-authentication'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { showErrorToast } from '../../Components/universal/Toast'

export const googleSignIn = () => {
    GoogleSignin.configure({
        webClientId: GOOGLE_CLIENT_ID,
        offlineAccess: true
    })
    return new Promise(async (resolve, _reject) => {
        try {
            const { idToken } = await GoogleSignin.signIn()
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)

            authSignIn(googleCredential)
                .then(async response => {
                    resolve(response)
                })
        } catch (error) {
            _reject(error)
        }
    })
}



export const appleSignIn = () => {
    return new Promise(async (resolve, _reject) => {
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });

            // Ensure Apple returned a user identityToken
            if (!appleAuthRequestResponse.identityToken) {
                throw new Error('Apple Sign-In failed - no identify token returned');
            }

            const { identityToken, nonce } = appleAuthRequestResponse
            const appleCredential = auth.AppleAuthProvider.credential(
                identityToken,
                nonce,
            )
            authSignIn(appleCredential)
                .then(async response => {
                    resolve(response)
                })
        } catch (error) {
            _reject(error)
        }
    })
}

const authSignIn = async (credential) => {
    return new Promise((resolve, _reject) => {
        auth()
            .signInWithCredential(credential)
            .then(response => {
                resolve(response)
            })
    })
        .catch(_error => {
            handleAuthError(_error)
            _reject(_error)
        })
}




//Response from Google Signin
// {"additionalUserInfo": {"isNewUser": false, "profile": {"at_hash": "uzXLf40glEUu2QLqS-1oZQ", "aud": "154905673298-1ojcgdc10gsfbat0l7d3aqivo0kd8lk0.apps.googleusercontent.com", "azp": "154905673298-ri9sfojvsn0jrd8qo375ujfqqd2k30j5.apps.googleusercontent.com", "email": "shubham.k@webllisto.com", "email_verified": true, "exp": 1689863984, "family_name": "Kothari", "given_name": "Shubham", "hd": "webllisto.com", "iat": 1689860384, "iss": "https://accounts.google.com", "locale": "en", "name": "Shubham Kothari", "nonce": "4T19x-gx_epRPrx1E-OmsG1cpkffo3dsPWqFrYUAVE4", "picture": "https://lh3.googleusercontent.com/a/AAcHTtdRm2zI7HlOZbauFu9kouWelpPCfKs7B6MIObQMKO-f=s96-c", "sub": "109019173735327576761"}, "providerId": "google.com", "username": null}, "user": {"displayName": "Shubham Kothari", "email": "shubham.k@webllisto.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": "https://lh3.googleusercontent.com/a/AAcHTtdRm2zI7HlOZbauFu9kouWelpPCfKs7B6MIObQMKO-f=s96-c", "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBx1ZyxSNAozdEQhDkfk-q73HtpNdN7TzMEK0csxv6ns9kxEMC7wpaLx53CzUhRN0s8Fyd7kvCdqQJMspYcv8O5mLLMsI3p52TDjZLbt4UB8PgV2EQGtHvdakKMX8cXrqKU0bGPxuWmXF-2LJ2zIFyNS1wCPwN0yg0PdlIDNnWbwGijUkWrTPC37XQyoYnBnTKcTOJSmSAYYLkpDcmVt-1wV5UfbYTOLfJHqINgTIJTSW24OoC_jFWMD-voQpfBehpGbYvriidsrKsQkFn_32cht5LFZ0mEsPeZzX6fQXyWyFfBWGKro9n3zEXN38BmcbQyPTHU4zCdvDjLQrLDh9ZKIevRIlPiUNMO8AMC281CUHi0MDU_G2SaAVHwOLIZ9w9XhgbxWPFcBxJAXrv5isHlx3Xueg6LfMrij5nMuV-Xdj_tyEDQ", "tenantId": null, "uid": "i5tyBcy7SLOwab1CR7T8876ymVB2"}}




//Resposne from Apple Signin
//{"additionalUserInfo": {"isNewUser": false, "profile": {"aud": "com.hanooot.ios", "auth_time": 1689860499, "c_hash": "DjChQbemSCa_SmDp730v-w", "email": "25mwvdvyd7@privaterelay.appleid.com", "email_verified": "true", "exp": 1689946899, "iat": 1689860499, "is_private_email": "true", "iss": "https://appleid.apple.com", "nonce": "9b365dd12480ab281dfb0ae9187f308084ee18739df41c532335d32c6d22b32b", "nonce_supported": true, "sub": "000169.c23f7674bce64ad28e70a1b849c69f88.1224"}, "providerId": "apple.com", "username": null}, "user": {"displayName": "Shubham Kothari", "email": "25mwvdvyd7@privaterelay.appleid.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBzOXWNOUcsd_H9ZJzYqAIfPGV59Iy7Je9jWp4jmNw7eGOrDcFFHaY5zPv4B9Z6kmOAisc4UYGIGzTCVjsRVJoXAwdgQcA7Eb13nN0wkkGfUCcEvHQp10dZpxvj4VZGhl41h2VDckmlvWWWLFH6N8Usf0pPNnhZCY32VuL8cYMc7ukiAXu3vq7XHEswt9aSUdtWGcThQvIh1-tXXdxLmzryia_Lfol-HB_AxWy0Epp-5qiTVreLT1F-blM9NVn4jZkMbi9wOvTh45C2v9Tn_QLEpvfwozQ8AUtZoH8N5k1UxK8QmekAPzTYNU9ZZm8DffRB8Mf6P", "tenantId": null, "uid": "ezjPvsYKKVUD3Z9evlVdhZS2gb23"}}



export const signInWithPhoneNumber = (phoneNumber) => {
    return new Promise((resolve, _reject) => {
        auth()
            .signInWithPhoneNumber(phoneNumber)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                handleAuthError(error)
                _reject(error)
            })
    })
}

export const createUserWithEmail = (email, pwd) => {
    return new Promise((resolve, _reject) => {
        auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                handleAuthError(error)
                _reject(error)
            })
    })
}

export const signInWithEmailAndPwd = (email, pwd) => {
    return new Promise((resolve, _reject) => {
        auth()
            .signInWithEmailAndPassword(email, pwd)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                handleAuthError(error)
            })
    })
}

export const sendPasswordResetEmail = (email) => {
    return new Promise((resolve, _reject) => {
        auth()
            .sendPasswordResetEmail(email)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                handleAuthError(error)
            })
    })
}

auth().onAuthStateChanged((user) => {
    console.log('Auth State changed', user);
    if (user) {
        // User logged in already or has just logged in.
        user.getIdToken().then(function (idToken) {  // <------ Check this line
            console.log('iDToken', idToken);
        });
        // console.log(user);
    } else {
        // User not logged in or has just logged out.
    }
});

export const signOut = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await auth().signOut();
            resolve(response)
        } catch (error) {
            console.log(error)
            // reject(error)
            handleAuthError(error)
        }
    })
}

export const confirmOtp = (authResult, otp) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await authResult.confirm(otp)
            resolve(response)
        } catch (error) {
            console.log(error)
            handleAuthError(error)
        }
    })
}

export const updateDisplayName = (userCredentials, name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await userCredentials.user.updateProfile({
                displayName: name
            })
            resolve(response)
        } catch (error) {
            console.log(error)
            handleAuthError(error)
        }
    })
}




export const handleAuthError = (error) => {
    var errorMessage = ''

    switch (error.code) {
        case "auth/missing-phone-number":
            errorMessage = "Missing Phone Number";
            break;

        case "auth/invalid-phone-number":
            errorMessage = "Invalid Phone Number.";
            break;

        case "auth/quota-exceeded":
            errorMessage = "SMS quota exceeded.";
            break;

        case "auth/too-many-requests":
            errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
            break;

        case "auth/invalid-verification-code":
            errorMessage = "Invalid OTP.";
            break;

        case "auth/code-expired":
            errorMessage = "OTP has been expired.";
            break;
        case "auth/no-current-user":
            errorMessage = "User already signed out";
            break;

        case "ERROR_EMAIL_ALREADY_IN_USE":
        case "account-exists-with-different-credential":
        case "email-already-in-use":
        case "auth/email-already-in-use":
            errorMessage = "Account already exists with different credentials";
            break;

        case "ERROR_WRONG_PASSWORD":
        case "wrong-password":
        case "auth/wrong-password":
            errorMessage = "Wrong email/password combination.";
            break;

        case "ERROR_USER_NOT_FOUND":
        case "user-not-found":
        case "auth/user-not-found":
            errorMessage = "No user found with this email.";
            break;

        case "ERROR_USER_DISABLED":
        case "user-disabled":
        case "auth/user-disabled":
            errorMessage = "User is disabled.";
            break;

        case "ERROR_TOO_MANY_REQUESTS":
        case "operation-not-allowed":
            errorMessage = "Too many requests to log into this account.";
            break;

        case "ERROR_OPERATION_NOT_ALLOWED":
        case "operation-not-allowed":
            errorMessage = "Server error, please try again later.";
            break;

        case "ERROR_INVALID_EMAIL":
        case "invalid-email":
        case "auth/invalid-email":
            errorMessage = "Email address is invalid.";
            break;

        default:
            errorMessage = "Something went wrong";
            break;
    }
    showErrorToast('Auth Error', errorMessage)
}
