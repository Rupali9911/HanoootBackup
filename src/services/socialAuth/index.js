

import auth from '@react-native-firebase/auth';
import { GOOGLE_CLIENT_ID } from '../../utility/apiUrls'
import appleAuth from '@invertase/react-native-apple-authentication'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

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

const authSignIn = (credential) => {
    return new Promise((resolve, _reject) => {
        auth()
            .signInWithCredential(credential)
            .then(response => {
                response.user.updateProfile({
                    displayName: 'Shubham Kothari',
                });
                resolve(response)
            })
    })
        .catch(_error => {
            _reject(_error)
        })
}




//Response from Google Signin
// {"additionalUserInfo": {"isNewUser": false, "profile": {"at_hash": "uzXLf40glEUu2QLqS-1oZQ", "aud": "154905673298-1ojcgdc10gsfbat0l7d3aqivo0kd8lk0.apps.googleusercontent.com", "azp": "154905673298-ri9sfojvsn0jrd8qo375ujfqqd2k30j5.apps.googleusercontent.com", "email": "shubham.k@webllisto.com", "email_verified": true, "exp": 1689863984, "family_name": "Kothari", "given_name": "Shubham", "hd": "webllisto.com", "iat": 1689860384, "iss": "https://accounts.google.com", "locale": "en", "name": "Shubham Kothari", "nonce": "4T19x-gx_epRPrx1E-OmsG1cpkffo3dsPWqFrYUAVE4", "picture": "https://lh3.googleusercontent.com/a/AAcHTtdRm2zI7HlOZbauFu9kouWelpPCfKs7B6MIObQMKO-f=s96-c", "sub": "109019173735327576761"}, "providerId": "google.com", "username": null}, "user": {"displayName": "Shubham Kothari", "email": "shubham.k@webllisto.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": "https://lh3.googleusercontent.com/a/AAcHTtdRm2zI7HlOZbauFu9kouWelpPCfKs7B6MIObQMKO-f=s96-c", "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBx1ZyxSNAozdEQhDkfk-q73HtpNdN7TzMEK0csxv6ns9kxEMC7wpaLx53CzUhRN0s8Fyd7kvCdqQJMspYcv8O5mLLMsI3p52TDjZLbt4UB8PgV2EQGtHvdakKMX8cXrqKU0bGPxuWmXF-2LJ2zIFyNS1wCPwN0yg0PdlIDNnWbwGijUkWrTPC37XQyoYnBnTKcTOJSmSAYYLkpDcmVt-1wV5UfbYTOLfJHqINgTIJTSW24OoC_jFWMD-voQpfBehpGbYvriidsrKsQkFn_32cht5LFZ0mEsPeZzX6fQXyWyFfBWGKro9n3zEXN38BmcbQyPTHU4zCdvDjLQrLDh9ZKIevRIlPiUNMO8AMC281CUHi0MDU_G2SaAVHwOLIZ9w9XhgbxWPFcBxJAXrv5isHlx3Xueg6LfMrij5nMuV-Xdj_tyEDQ", "tenantId": null, "uid": "i5tyBcy7SLOwab1CR7T8876ymVB2"}}




//Resposne from Apple Signin
//{"additionalUserInfo": {"isNewUser": false, "profile": {"aud": "com.hanooot.ios", "auth_time": 1689860499, "c_hash": "DjChQbemSCa_SmDp730v-w", "email": "25mwvdvyd7@privaterelay.appleid.com", "email_verified": "true", "exp": 1689946899, "iat": 1689860499, "is_private_email": "true", "iss": "https://appleid.apple.com", "nonce": "9b365dd12480ab281dfb0ae9187f308084ee18739df41c532335d32c6d22b32b", "nonce_supported": true, "sub": "000169.c23f7674bce64ad28e70a1b849c69f88.1224"}, "providerId": "apple.com", "username": null}, "user": {"displayName": "Shubham Kothari", "email": "25mwvdvyd7@privaterelay.appleid.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AMf-vBzOXWNOUcsd_H9ZJzYqAIfPGV59Iy7Je9jWp4jmNw7eGOrDcFFHaY5zPv4B9Z6kmOAisc4UYGIGzTCVjsRVJoXAwdgQcA7Eb13nN0wkkGfUCcEvHQp10dZpxvj4VZGhl41h2VDckmlvWWWLFH6N8Usf0pPNnhZCY32VuL8cYMc7ukiAXu3vq7XHEswt9aSUdtWGcThQvIh1-tXXdxLmzryia_Lfol-HB_AxWy0Epp-5qiTVreLT1F-blM9NVn4jZkMbi9wOvTh45C2v9Tn_QLEpvfwozQ8AUtZoH8N5k1UxK8QmekAPzTYNU9ZZm8DffRB8Mf6P", "tenantId": null, "uid": "ezjPvsYKKVUD3Z9evlVdhZS2gb23"}}