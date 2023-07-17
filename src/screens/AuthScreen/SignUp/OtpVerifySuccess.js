import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmptyDetailScreen from '../../../Components/EmptyDetailScreen'
import Images from '../../../constant/Images'

const OtpVerifySuccess = () => {
  return (
    <EmptyDetailScreen 
    image={Images.OTPVerify}
    title={'Mobile Number verified Sucessfully!'}
    description={'Thank you for registering!'}
    buttonLabel={'Go to Shooping'}
    />
  )
}

export default OtpVerifySuccess

const styles = StyleSheet.create({})