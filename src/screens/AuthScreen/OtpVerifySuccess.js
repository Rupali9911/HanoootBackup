import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmptyDetailScreen from '../../Components/EmptyDetailScreen'
import Images from '../../constant/Images'
import { useNavigation } from '@react-navigation/native'

const OtpVerifySuccess = () => {
  const navigation = useNavigation();
  return (
    <EmptyDetailScreen
      image={Images.OTPVerify}
      title={'Mobile Number verified Sucessfully!'}
      description={'Thank you for registering!'}
      buttonLabel={'Go to Shooping'}
      onpress={() => navigation.navigate('Home')}
    />
  )
}

export default OtpVerifySuccess

const styles = StyleSheet.create({})