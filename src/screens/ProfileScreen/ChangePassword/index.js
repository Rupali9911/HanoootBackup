import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import AppInput from '../../../constant/AppInput';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import AppButton from '../../Components/AppButton';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({})
  const [isMatched, setIsMatched] = useState(false)

  const navigation = useNavigation();


  // console.log('check old password : ', !oldPassword ? false : true)


  // Regular expression to validate oldPassword
  const validPasswordString = (value) => {
    setOldPassword(value);
    const errList = {}
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (value && !reg.test(value)) {
      errList.newPassword = 'Password must contain at least 8 characters, one letter and one number';
    } else {
      errList.newPassword = ''
    }
    setError(errList);
  }

  // Compare value of two passwords
  comparePasswords = (confirmPassword) => {
    const errList = {}
    if (confirmPassword && newPassword != confirmPassword) {
      errList.confirmPassword = 'Password must contain at least 8 characters, one letter and one number';
    } else {
      errList.confirmPassword = '';
    }
    setError(errList);
  }

  const ChangePassword = () => {
    let errorList = {};
    !oldPassword ?
      errorList["oldPassword"] = 'Enter your old password' :
      !newPassword ? errorList["newPassword"] = 'Enter your new password' : 
        !confirmPassword ? errorList["confirmPassword"] = 'Enter your confirm password' :
          newPassword !== confirmPassword ? errorList["confirmPassword"] = 'Password are not matched!!' : {};

    setError(errorList)
    if (Object.keys(errorList).length == 0) {
      setError({});
      // navigation.navigate('ChangePasswordSuccess')
      navigation.navigate('ToastMessageScreen', { title: 'Password Updated Successfully!', navigate: 'ProfileScreen' }) 
    }
  }

  return (
    <AppBackground>
      <AppHeader showBackButton title={'Reset Password'} />
      <Text style={styles.title}>New oldPassword should be different from your current oldPassword</Text>
      <AppInput
        placeholder={'Enter your current Password'}
        label={'Enter Current Password'}
        isEyeIconShow
        value={oldPassword}
        onChangeText={(oldPassword) => {
          setOldPassword(oldPassword);
          // !oldPassword ? error["oldPassword"] = '' : null
        }}
        error={error["oldPassword"]}
        maxLength={9}
        // onBlur={() => {
        //   validPasswordString(oldPassword)
        // }}

      />
      <AppInput
        placeholder={'Enter new Password'}
        label={'Enter new Password'}
        isEyeIconShow
        value={newPassword}
        onChangeText={(newPassword) => {
          setNewPassword(newPassword);
          !newPassword ? error["newPassword"] = '' : null
        }}
        maxLength={9}
        error={error["newPassword"]}
        onBlur={() => {
          validPasswordString(newPassword)
        }}
      />


      <AppInput
        placeholder={'Re-enter new Password'}
        label={'Confirm New Password'}
        isEyeIconShow
        value={confirmPassword}
        onChangeText={(confirmPassword) => {
          setConfirmPassword(confirmPassword);
          // !confirmPassword ? error["confirmPassword"] = '' : null
        }}
        // onChangeText={newPassword => setNewPassword(newPassword)}
        maxLength={9}
        error={error["confirmPassword"]}
        // onBlur={() => {
        //   comparePasswords(confirmPassword)
        // }}
      />


      <AppButton
        label={'Update Password'}
        view={!oldPassword || !newPassword || !confirmPassword ? true : false}
        containerStyle={{ flex: 1, bottom: 50, position: 'absolute' }}
        onPress={ChangePassword}
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
