import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import AppBackground from '../../Components/AppBackground';
import AppHeader from '../../Components/AppHeader';
import AppInput from '../../../constant/AppInput';
import fonts from '../../../constant/fonts';
import Colors from '../../../constant/Colors';
import AppButton from '../../Components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { updatePasswordOnFirebase } from '../../../services/socialAuth';
import { validateOnlyPassword } from '../../utils';
import { updatePassword } from '../../../services/apis';
import { translate } from '../../../utility';

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
      errList.newPassword = translate('common.passwordCheck');
    } else {
      errList.newPassword = ''
    }
    setError(errList);
  }

  // Compare value of two passwords
  comparePasswords = (confirmPassword) => {
    const errList = {}
    if (confirmPassword && newPassword != confirmPassword) {
      errList.confirmPassword = translate('common.passwordCheck');
    } else {
      errList.confirmPassword = '';
    }
    setError(errList);
  }

  const ChangePassword = async () => {
    let errorList = {};
    !oldPassword ?
      errorList["oldPassword"] = translate('common.enteryouroldpassword') :
      !newPassword ? errorList["newPassword"] = translate('common.enteryournewpassword') :
        !confirmPassword ? errorList["confirmPassword"] = translate('common.enteryourconfirmpassword') :
          newPassword !== confirmPassword ? errorList["confirmPassword"] = translate('common.passwordarenotmatched') : {};

    if (validateOnlyPassword(newPassword)) {
      errorList["newPassword"] = validateOnlyPassword(newPassword)
    }

    if (validateOnlyPassword(confirmPassword)) {
      errorList["confirmPassword"] = validateOnlyPassword(confirmPassword)
    }
    setError(errorList)
    if (Object.keys(errorList).length == 0) {
      setError({});
      await updatePasswordOnFirebase(oldPassword, newPassword)
      await updatePassword(newPassword)
      navigation.navigate('ToastMessageScreen', { title: translate('common.passwordupdatedsuccessfully'), navigate: 'ProfileScreen' })
    }
  }

  return (
    <AppBackground>
      <AppHeader showBackButton title={translate('common.resetpassword')} />
      <Text style={styles.title}>{translate('common.newNOldPassShouldSame')}</Text>
      <AppInput
        placeholder={translate('common.enteryourcurrentpassword')}
        label={translate('common.entercurrentpassword')}
        isEyeIconShow
        value={oldPassword}
        onChangeText={(oldPassword) => {
          setOldPassword(oldPassword);
          // !oldPassword ? error["oldPassword"] = '' : null
        }}
        error={error["oldPassword"]}
      // maxLength={9}
      // onBlur={() => {
      //   validPasswordString(oldPassword)
      // }}

      />
      <AppInput
        placeholder={translate('common.enternewpassword')}
        label={translate('common.enternewpassword')}
        isEyeIconShow
        value={newPassword}
        onChangeText={(newPassword) => {
          setNewPassword(newPassword);
          !newPassword ? error["newPassword"] = '' : null
        }}
        // maxLength={9}
        error={error["newPassword"]}
        onBlur={() => {
          validPasswordString(newPassword)
        }}
      />


      <AppInput
        placeholder={translate('common.reEnternewpassword')}
        label={translate('common.confirmnewpassword')}
        isEyeIconShow
        value={confirmPassword}
        onChangeText={(confirmPassword) => {
          setConfirmPassword(confirmPassword);
          // !confirmPassword ? error["confirmPassword"] = '' : null
        }}
        // onChangeText={newPassword => setNewPassword(newPassword)}
        // maxLength={9}
        error={error["confirmPassword"]}
      // onBlur={() => {
      //   comparePasswords(confirmPassword)
      // }}
      />


      <AppButton
        label={translate('common.updatepassword')}
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
