import { networkType } from './networkType.js';

let API_BASE_URL = '';

if (networkType === 'production') {
  API_BASE_URL = 'https://api.hanooot.com';
} else if (networkType === 'staging') {
  API_BASE_URL = 'https://api.hanooot.com';
} else {
  API_BASE_URL = 'https://api.hanooot.com';
}

export {
  API_BASE_URL
};
