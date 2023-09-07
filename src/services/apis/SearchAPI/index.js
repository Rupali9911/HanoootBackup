import { SEARCH_API } from '../../../utility/apiUrls';
import sendRequest from '../../axios/AxiosApiRequest';

export const globalSearchAPICall = searchTxt => dispatch =>
    new Promise(async (resolve, reject) => {
        sendRequest({
            url: SEARCH_API,
            method: 'GET',
            params: {
                search: 'a',
            },
        })
            .then(response => {
                if (response?.success === true) {
                    resolve(response);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
