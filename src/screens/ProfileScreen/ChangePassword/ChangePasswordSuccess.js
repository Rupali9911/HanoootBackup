import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToastPages from '../../../Components/MyAddress/ToastPages'
import { useNavigation } from '@react-navigation/native'

const ChangePasswordSuccess = () => {
  const navigation = useNavigation();
  return (
   <ToastPages 
   title={'Password Updated Successfully!'}
   onPress={navigation.navigate('ProfileScreen')}
   />
  )
}

export default ChangePasswordSuccess;

const styles = StyleSheet.create({})