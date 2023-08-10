import { API_BASE_URL } from './constants.js';

//Other Configs
const GOOGLE_CLIENT_ID = '154905673298-1ojcgdc10gsfbat0l7d3aqivo0kd8lk0.apps.googleusercontent.com';


//APIs
const CHECK_PHONE_NUMBER = `${API_BASE_URL}/api/v1/user/check-phone`
const USER_REGISTER = `${API_BASE_URL}/api/v1/user/register`
const CATEGORY_LIST = `${API_BASE_URL}/api/v1/category`
const PRODUCT_LIST = `${API_BASE_URL}/api/v1/product`
const PRODUCT_DETAIL_API = `${API_BASE_URL}/api/v1/product/detail`
const UPDATE_PROFILE = `${API_BASE_URL}/api/v1/user/update-profile`
const HELPNSUPPORT = `${API_BASE_URL}/api/v1/help-support`
const ADD_NEW_ADDRESS = `${API_BASE_URL}/api/v1/address`
const FETCH_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address`
const UPDATE_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address/update`
const DELETE_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address`

// https://api.hanooot.com/api/v1/address/update

export {
    CHECK_PHONE_NUMBER,
    GOOGLE_CLIENT_ID,
    USER_REGISTER,
    CATEGORY_LIST,
    PRODUCT_LIST,
    PRODUCT_DETAIL_API,
    UPDATE_PROFILE,
    HELPNSUPPORT,
    ADD_NEW_ADDRESS,
    FETCH_ADDRESS_DETAIL,
    UPDATE_ADDRESS_DETAIL,
    DELETE_ADDRESS_DETAIL
};
