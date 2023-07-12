import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import AppInput from '../../../constant/AppInput'
import AppButton from '../../Components/AppButton'
import { useNavigation } from '@react-navigation/native'


const EditProfile = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigation = useNavigation();

    const UpdateProfile = () => {
        navigation.navigate('ToastMessageScreen', { title: 'Profile Updated Successfully!', navigate: 'EditProfileScreen' }) 
    }

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Edit Profile'}
            />
            <AppInput 
            label={'First Name'}
            placeholder={'Enter your first name'}
            />
            <AppInput 
            label={'Last Name'}
            placeholder={'Enter your last name'}/>
            <AppInput 
            label={'Email'}
            placeholder={'Enter your email'}/>


            <AppButton 
             label={'UPDATE PROFILE'}
             containerStyle={{position: 'absolute', bottom: 10}}
             onPress={() => UpdateProfile()}
            />
        </AppBackground>
    )
}

export default EditProfile

const styles = StyleSheet.create({})