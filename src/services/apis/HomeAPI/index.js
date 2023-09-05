import { HOME_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast, showErrorToast } from "../../../Components/universal/Toast";

export const HomeDataAPICall = () => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: HOME_API,
            method: 'GET',
        }).
            then((response) => {
                console.log('Response from HOME_API : ', response);
                if (response?.success === true) {
                    resolve(response)
                }
                else {
                    showErrorToast('Auth Error', response?.message)
                }
            }).
            catch((error) => {
                console.log('Error from HOME_API : ', error);
                _reject(error)
                if (error?.status == 401) {
                    showErrorToast('Auth Error', '')
                }
            })
    })
}
