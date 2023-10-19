import { networkType } from './networkType.js';

let API_BASE_URL = '';

if (networkType === 'production') {
  API_BASE_URL = process.env.API_BASE_URL_PROD;
  // API_BASE_URL = 'http://3.29.131.157';
} else if (networkType === 'staging') {
  API_BASE_URL = process.env.API_BASE_URL_STAG;
} else {
  API_BASE_URL = process.env.API_BASE_URL_STAG;
}

export {
  API_BASE_URL
};
