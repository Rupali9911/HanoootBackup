import { Platform } from 'react-native';
import { API_BASE_URL } from './constants.js';

// //Other Configs
// const GOOGLE_CLIENT_ID = '154905673298-1ojcgdc10gsfbat0l7d3aqivo0kd8lk0.apps.googleusercontent.com';
// // const GOOGLE_CLIENT_ID = '154905673298-k14h4bvtrclh9p9rkbgs09oai64rckjl.apps.googleusercontent.com';
// const GOOGLE_API_KEY = Platform.OS === 'ios' ? 'AIzaSyBrzXVff2NFocJdPwtn3fLyTR8vLkZpJQE' : 'AIzaSyDgYEhFKOXi6VpeYxb6QVNyPmfzWh0_ZZI';


//Other Configs
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_ID = '154905673298-k14h4bvtrclh9p9rkbgs09oai64rckjl.apps.googleusercontent.com';
const GOOGLE_API_KEY = Platform.OS === 'ios' ? process.env.GOOGLE_API_KEY_IOS : process.env.GOOGLE_API_KEY_ANDROID;

//APIs
const BASE_API = `${API_BASE_URL}/api/v1`

const CHECK_PHONE_NUMBER = `${API_BASE_URL}/api/v1/user/check-phone`
const USER_REGISTER = `${API_BASE_URL}/api/v1/user/register`
const CATEGORY_LIST = `${API_BASE_URL}/api/v1/category`
const PARENT_CATEGORY_API = `${API_BASE_URL}/api/v1/category/get-all-parent`
const SUB_CATEGORY_API = `${API_BASE_URL}/api/v1/category/get-all-sub-category-brand`


const PRODUCT_API = `${API_BASE_URL}/api/v1/product`

const UPDATE_PROFILE = `${API_BASE_URL}/api/v1/user/update-profile`
const UPDATE_PASSWORD = `${API_BASE_URL}/api/v1/user/update-password`
const HELPNSUPPORT = `${API_BASE_URL}/api/v1/help-support`

const WISHLIST_API = `${API_BASE_URL}/api/v1/wishlist`

const ADD_NEW_ADDRESS = `${API_BASE_URL}/api/v1/address`
const FETCH_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address`
const UPDATE_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address/update`
const DELETE_ADDRESS_DETAIL = `${API_BASE_URL}/api/v1/address`


const ORDER_API = `${API_BASE_URL}/api/v1/order`

const ORDER_DETAIL_API = `${API_BASE_URL}/api/v1/order/ordersDetails`

const CART_API = `${API_BASE_URL}/api/v1/cart`

const COUPON_API = `${API_BASE_URL}/api/v1/promocode`

const HOME_API = `${API_BASE_URL}/api/v1/home-page`

const SEARCH_API = `${API_BASE_URL}/api/v1/product/search`
const DELETE_ACCOUNT = `${API_BASE_URL}/api/v1/user/deleteUser`


const CREATE_SHARE_LINK_API = `${API_BASE_URL}/api/v1/product/create-link-share-product`


const DEEP_LINKING_PRODUCTS_API_CALL = `${API_BASE_URL}/api/v1/product/deep-linking-products`

// https://api.hanooot.com/api/v1/product/deep-linking-products?key=81vRIo5k0M


export {
    CHECK_PHONE_NUMBER,
    GOOGLE_CLIENT_ID,
    USER_REGISTER,
    CATEGORY_LIST,
    PRODUCT_API,
    UPDATE_PROFILE,
    HELPNSUPPORT,
    ADD_NEW_ADDRESS,
    FETCH_ADDRESS_DETAIL,
    UPDATE_ADDRESS_DETAIL,
    DELETE_ADDRESS_DETAIL,
    WISHLIST_API,
    GOOGLE_API_KEY,
    UPDATE_PASSWORD,
    CART_API,
    ORDER_API,
    ORDER_DETAIL_API,
    HOME_API,
    SEARCH_API,
    BASE_API,
    COUPON_API,
    DELETE_ACCOUNT,
    PARENT_CATEGORY_API,
    SUB_CATEGORY_API,
    CREATE_SHARE_LINK_API,
    DEEP_LINKING_PRODUCTS_API_CALL
};
