import { networkType } from './networkType.js';

let API_BASE_URL = '';

if (networkType === 'production') {
  // API_BASE_URL = 'https://api.hanooot.com';
  API_BASE_URL = 'http://3.29.131.157';
} else if (networkType === 'staging') {
  API_BASE_URL = 'http://3.28.122.59:4000';
} else {
  API_BASE_URL = 'http://3.28.122.59:4000';
}

export {
  API_BASE_URL
};
