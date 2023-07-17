export const maxLength = max => value =>
    value && value.length > max
        ? `You should not exceed more than ${max} chars.`
        : undefined;


export const maxLength32 = maxLength(32);
export const maxLength10 = maxLength(10);
export const maxLength8 = maxLength(8);


const userNameRegex = new RegExp(
    // /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
    "^\\w[\\w.]{2,18}\\w$"
);

const phoneNoRegex = new RegExp(
    '^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$'
)


const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
)

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)


export const validateUserName = value => {
    // console.log('value : ', value, !userNameRegex.test(value))
    if (!value.trim().length) {
        return 'Your name is required';
    } else if (!userNameRegex.test(value)) {
        return 'No special character, no spacing, only alphabetical and numerical characters required';
    }
};



export const validatePhoneNo = value => {
    if (!value.trim().length) {
        return 'Mobile No is required';
    } else if (!phoneNoRegex.test(value)) {
        return 'Please enter a valid mobile no';
    }
};

export const validatePassword = value => {
    if (!value.trim().length) {
        return 'Password is required';
    } else if (!passwordRegex.test(value)) {
        return 'Please enter a valid password';
    }
    
};

export const validateEmail = value => {
    if (!value.trim().length) {
      return 'Email is required';
    } else if (!emailRegex.test(value)) {
      return 'Please enter valid email address';
    } else {
      return false;
    }
  };

