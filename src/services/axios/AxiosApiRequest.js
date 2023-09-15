import NetInfo from '@react-native-community/netinfo';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { getRefreshFirebaseToken } from '../socialAuth';
// import { NEW_BASE_URL } from '../common/constants';
// import { modalAlert } from '../common/function';

var isAlert = false;

//=============== API Calling function ========================
async function sendRequest(payload) {
  console.log('payload check : ', payload)
  try {
    const token = await getAccessToken('ACCESS_TOKEN');
    console.log('token received from getAccessToken method', token)
    payload.headers = payload.headers
      ? payload.headers.Authorization
        ? payload.headers.Authorization === 'No'
          ? getHeaders(payload.headers)
          : payload.headers
        : {
          ...payload.headers,
          Authorization: token,
        }
      : token
        ? {
          'Content-Type': 'application/json',
          Authorization: token,
        }
        : {
          'content-type': 'application/json',
        };
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      isAlert = false;
      const response = await axiosInstance.request(payload);
      return response?.data;
    } else {
      if (!isAlert) {
        Alert.alert(
          'Alert',
          'Slow or no internet connection. Please check your internet connection',
        );
      } else {
        // return Promise.reject()
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export const axiosInstance = axios.create();

//=============== Axios Interceptors ========================
axiosInstance.interceptors.response.use(
  response => {

    return response;

  },
  async err => {
    const { response, config } = err;
    console.log('Error from API', err)
    try {
      if (response?.status === 401 || response?.status === 403) {
        const freshToken = await APIRefreshToken();
        // console.log('response from APIRefreshToken', rest)

        // if (!rest || !rest.newToken) {
        //   return Promise.reject(response);
        // }
        // await setAccesToken(rest.newToken);
        if (response?.request?._headers?.x - amz - tagging) {
          let xtag = response?.request?._headers?.x - amz - tagging
          console.log('xtag', xtag)



          let params = new URLSearchParams(xtag)

          console.log(params.toString())
          params.delete('token')
          params.append('token', freshToken)
          console.log(params.toString())



          config.headers['x-amz-tagging'] = freshToken
          config.headers['Authorization'] = freshToken
        } else {
          config.headers['Authorization'] = freshToken;
        }

        return axiosInstance(config);
      } else if (response?.status === 403) {
      } else if (response?.status === 455) {
      } else if (response?.status === 502) {
      } else if (response?.status === 400) {
      }
      // console.log('response from Send Request', response)

      return Promise.reject(response);
    } catch (error) {
      // console.log('Error from Send Request', error)
      return Promise.reject(error);
    }
  },
);

//================= Set Access Token =======================
export async function setAccesToken(value) {
  try {
    let sessionToken = null;
    const token = await EncryptedStorage.getItem('SESSION_TOKEN');
    if (token !== undefined) {
      sessionToken = JSON.parse(token);
      const newSessionToken = { ...sessionToken, accessToken: value };
      await EncryptedStorage.setItem(
        'SESSION_TOKEN',
        JSON.stringify(newSessionToken),
      );
    }
    return value;
  } catch (error) { }
}

//================== Get Access Token =====================
export async function getAccessToken(tokenName) {
  console.log('getAccessToken called', tokenName)
  try {
    let sessionToken = null;
    const token = await EncryptedStorage.getItem('SESSION_TOKEN');
    console.log('EncryptedStorage token', token)

    if (token !== undefined) {
      sessionToken = JSON.parse(token);
      return tokenName === 'ACCESS_TOKEN'
        ? sessionToken?.accessToken
        : sessionToken?.refreshToken;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}


//================== Refresh Token API call =====================
export async function APIRefreshToken() {
  // const token = await getAccessToken('ACCESS_TOKEN');
  // const refreshToken = await getAccessToken('REFRESH_TOKEN');
  // if (!token || !refreshToken) return undefined;
  getRefreshFirebaseToken()
    .then(async (token) => {
      console.log('getRefreshFirebaseToken response :', token)
      await setAccesToken(token);
      return token
    })
    .catch((err) => console.log('getRefreshFirebaseToken err :', err))

  // return sendRequest({
  //   url: `${NEW_BASE_URL}/auth/refresh-token`,
  //   method: 'POST',
  //   data: { token, refreshToken },
  // });
  // return refreshToken;
}

//=================== Get Headers =====================
const getHeaders = header => {
  delete header['Authorization'];
  return header;
};

export default sendRequest;
