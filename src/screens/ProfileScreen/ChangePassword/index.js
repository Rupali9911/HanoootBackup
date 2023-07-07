import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import AppInput from '../../../constant/AppInput';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import AppButton from '../../Components/AppButton';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({})


  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const validPasswordString = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/

    const isValid = passwordRegex.test(value);

    setPassword(value)

    const errList = { ...error }

    if (value && isValid) {
      console.log('Valid Password')
      errList.password = 'Valid Password'
    }
    else {
      console.log('InValid Password')
      errList.password = 'Invalid Password'
    }
    setError(errList)

  }





  return (
    <AppBackground>
      <AppHeader showBackButton title={'Reset Password'} />
      <Text style={styles.title}>New password should be different from your current password</Text>
      <AppInput
        placeholder={'Enter your current password'}
        label={'Enter Current Password'}
        isEyeIconShow
        value={password}
        onChangeText={(password) => validPasswordString(password)}
        error={error["password"]}
      />
      <AppInput
        placeholder={'Enter new password'}
        label={'Enter new password'}
        isEyeIconShow
        value={newPassword}
        onChangeText={newPassword => setNewPassword(newPassword)}
      />
      <AppInput
        placeholder={'Re-enter new password'}
        label={'Confirm New Password'}
        isEyeIconShow
        value={confirmPassword}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
      />


      <AppButton
        label={'Update Password'}
        containerStyle={{ flex: 1, bottom: 50, position: 'absolute' }}
        onPress={() => console.log('value of change password : ', password, newPassword, confirmPassword)}
      />
    </AppBackground>

  )
}

export default ChangePassword;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.VisbyCF_Medium,
    // lineHeight: 19,
    letterSpacing: 0.5,
    // marginBottom: 5,
    fontWeight: '500',
    color: Colors.BLACK,
    margin: '5%',
    fontSize: 16,
    textAlign: 'left'
  },
})


// import React, { useState } from 'react';
// import { TextInput, TouchableOpacity, Text, View } from 'react-native';

// const PasswordInput = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState('');

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View>
//       <TextInput
//         secureTextEntry={!showPassword}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//       />
//       <TouchableOpacity onPress={toggleShowPassword}>
//         <Text>{showPassword ? 'Hide' : 'Show'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default PasswordInput;