import { HOME_API } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";
import { showInfoToast, showErrorToast } from "../../../Components/universal/Toast";
import { Store } from "../../../screens/Store";
import { translate } from "../../../utility";

const isLanguage = Store.getState().languageReducer.selectedLanguageItem?.language_id;


export const HomeDataAPICall = (userData) => {
    console.log('home api callled')
    return new Promise((resolve, _reject) => {
        (userData
            ? sendRequest({
                url: HOME_API,
                method: 'GET',
            })
            : sendRequest({
                url: HOME_API,
                method: 'GET',
                headers: {
                    'Authorization': 'No'
                },
            })
        ).
            then((response) => {
                console.log('Response from HOME_API : ', response);
                if (response?.success === true) {
                    resolve(response)
                }
                else {
                    showErrorToast(translate('common.autherror'), isLanguage === 0 ? response?.message : response?.message_arabic)
                }
            }).
            catch((error) => {
                console.log('Error from HOME_API : ', error);
                _reject(error)
                if (error?.status == 401) {
                    showErrorToast(translate('common.autherror'), '')
                }
            })
    })
}
