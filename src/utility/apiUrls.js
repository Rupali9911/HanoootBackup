import { API_BASE_URL } from './constants.js';

//Other Configs
const GOOGLE_CLIENT_ID = '154905673298-1ojcgdc10gsfbat0l7d3aqivo0kd8lk0.apps.googleusercontent.com';


//APIs
const CHECK_PHONE_NUMBER = `${API_BASE_URL}/api/v1/user/check-phone`
const USER_REGISTER = `${API_BASE_URL}/api/v1/user/register`
const CATEGORY_LIST = `${API_BASE_URL}/api/v1/category`



export {
    CHECK_PHONE_NUMBER,
    GOOGLE_CLIENT_ID,
    USER_REGISTER,
    CATEGORY_LIST
};
