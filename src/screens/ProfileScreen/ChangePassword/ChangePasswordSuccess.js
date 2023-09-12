import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToastPages from '../../../Components/AddressComponent/ToastPages'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../../utility'

const ChangePasswordSuccess = () => {
  const navigation = useNavigation();
  return (
    <ToastPages
      title={translate('common.passwordupdatedsuccessfully')}
      onPress={navigation.navigate('ProfileScreen')}
    />
  )
}

export default ChangePasswordSuccess;

const styles = StyleSheet.create({})