import { translate } from "../../utility";

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
    } else if (!fullNameRegex.test(value)) {
        return translate('common.stringCheck');
    }
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
        return translate('common.validEmail');
    } else {
        return false;
    }
};


export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const validateDescription = value => {
    if (!value.trim().length) {
        return translate('common.pleaseenteryourquery');
    } else {
        return false;
    }
};

