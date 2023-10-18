import { translate } from "../../utility";
import { getWeekDays, getMonths } from "../../constant/SwitchRenders";
import fonts from "../../constant/fonts";
import { Store } from "../Store";
import Images from "../../constant/Images";
const isLanguage = Store.getState().languageReducer.selectedLanguageItem?.language_id;


export const maxLength = max => value =>
    value && value.length > max
        ? translate('common.maxcharcheck', { max: `${max}` })
        : undefined;

export const maxLength32 = maxLength(32);
export const maxLength10 = maxLength(10);
export const maxLength8 = maxLength(8);
export const maxLength50 = maxLength(50);


const fullNameRegex = new RegExp(/^[A-Za-z\s]*$/)

const userNameRegex = new RegExp(
    // /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
    "^\\w[\\w.]{2,18}\\w$"
);

const phoneNoRegex = new RegExp(
    '^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$'
)


const passwordRegex = new RegExp(
    // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/
)

const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)


export const validateUserName = value => {
    // console.log('value : ', value, !userNameRegex.test(value))
    if (!value.trim().length) {
        return translate('common.yournameisrequired');
    } else if (!userNameRegex.test(value)) {
        return translate('common.stringCheck');
    }
};

export const validateFullName = value => {
    if (!value.trim().length) {
        return translate('common.yournameisrequired');
    }
    // else if (!fullNameRegex.test(value)) {
    //     return translate('common.stringCheck');
    // }
};



export const validatePhoneNo = value => {
    // console.log('Chekc phone no value : ', value)
    if (!value.trim().length) {
        return translate('common.numbReq');
    } else if (!phoneNoRegex.test(value)) {
        return translate('common.validMob');
    }
};

export const validatePassword = value => {
    console.log('Test password validation', passwordRegex.test(value), value,)
    if (!value.trim().length) {
        return translate('common.passReq');
    } else if (!passwordRegex.test(value)) {
        return translate('common.pleaseenteravalidpassword');
    }
};

export const validateBlankPassword = value => {
    if (!value.trim().length) {
        return translate('common.passReq');
    }
};

export const validateOnlyPassword = value => {
    if (!passwordRegex.test(value)) {
        return translate('common.pleaseenteravalidpassword');
    }
};

export const validateEmail = value => {
    if (!value.trim().length) {
        return translate('common.emailisrequired');
    } else if (!emailRegex.test(value)) {
        return translate('common.pleaseentervalidemailaddress');
    } else {
        return false;
    }
};


export const capitalizeFirstLetter = (string) => {
    try {
        var strCpital = string.charAt(0).toUpperCase() + string?.slice(1);
        return strCpital
    }
    catch {
        return ''
    }

}

export const validateDescription = value => {
    if (!value.trim().length) {
        return translate('common.pleaseenteryourquery');
    } else {
        return false;
    }
};


export const estimatedDelivery = value => {
    try {
        if (value.trim().length) {
            const splitTo = value.split(' to '); //["Sat Sep 23 2023 ", " Mon Sep 25 2023"]

            const splitFirstObj = splitTo[0].split(" ");//["Sat", "Sep", "23", "2023"]
            const splitSecondObj = splitTo[1].split(" ");//["Mon", "Sep", "25", "2023"]

            splitFirstObj[0] = getWeekDays(splitFirstObj[0])
            splitFirstObj[1] = getMonths(splitFirstObj[1])

            splitSecondObj[0] = getWeekDays(splitSecondObj[0])
            splitSecondObj[1] = getMonths(splitSecondObj[1])


            const resultString = `${splitFirstObj.join(' ')} to ${splitSecondObj.join(' ')}`

            console.log('final result ', resultString)


            return resultString;
        }
    }
    catch (error) {
        console.log('estimatedDelivery err', error)
    }

};


export const getVariantsData = (str, key, isLanguage) => {
    try {
        if (isLanguage == 1) {
            if (key.includes('arabic')) {
                return str;
            }
        }
        else {
            if (str.includes(':')) {
                return str.split(':')[1];
            }
            return str;
        }
    }
    catch (error) {
        // console.log(error)
    }

};


export const getFonts = {
    BOLD: isLanguage === 0 ? fonts.VisbyCF_Bold : fonts.Bahij_Bold,
    MEDIUM: isLanguage === 0 ? fonts.VisbyCF_Medium : fonts.Bahij_SemiBold,
    REGULAR: isLanguage === 0 ? fonts.VISBY_CF_REGULAR : fonts.Bahij_Regular,
    SEMI_BOLD: isLanguage === 0 ? fonts.VisbyCF_Demibold : fonts.Bahij_SemiBold,


};


export const isExtension = (image) => {
    const imageUrl = image ? image : Images.skeleton;
    const extension = imageUrl.split('.').pop().toLowerCase();

    return extension;

};

// export const ImageRenderer = ({ uri }) => {
//     const isSvg = uri.endsWith('.svg');
//     const isPng = uri.endsWith('.png');
//     const isJpeg = uri.endsWith('.jpg') || uri.endsWith('.jpeg');

//     if (isSvg) {
//         return <SvgUri source={{ uri }} />;
//     } else if (isPng || isJpeg) {
//         return <FastImage source={{ uri }} style={{ width: 100, height: 100 }} />;
//     } else {
//         return <View />;
//     }
// };

const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


export const formattedPrice = (price) => {
    const priceInIQD = price ? Number(price) : 0; // Example price in IQD

    return priceInIQD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}


const CountryCode = {
    '+91': 'IN',  // India
    // '+1': 'US',   // United States
    // '+44': 'GB',  // United Kingdom

    '+964': 'IQ',
    '+44': 'GB',
    '+971': 'AE',
    '+61': 'AU',
    '+1': 'US',
    '+962': 'JO',
    '+966': 'SA',
    '+965': 'KW',
    '+968': 'OM',
    '+974': 'QA',
    '+20': 'EG',
    '+963': 'SY',
    '+46': 'SE',
    '+1': 'CA'
};

export const getCountryCode = code => {
    return CountryCode[code]; // Return 'Unknown' for unmapped MCCs
};
