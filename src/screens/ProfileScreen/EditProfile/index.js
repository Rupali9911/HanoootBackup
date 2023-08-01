import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import AppInput from '../../../constant/AppInput'
import AppButton from '../../Components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { maxLength10, validatePhoneNo, validateUserName, validatePassword, maxLength8, validateFullName, maxLength50, validateEmail } from '../../utils'
import { updateProfile } from '../../../services/apis'
import { setUserData, updateNameEmail } from '../../Store/actions/userAction'

const EditProfile = () => {
    const { userData } = useSelector((state) => state.userReducer)

    const [name, setName] = useState(userData?.displayName)
    const [email, setEmail] = useState(userData?.email)
    const [error, setError] = useState({})

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const UpdateProfile = () => {
        const errorList = {}

        //=============Fullname Validation================
        if (validateFullName(name)) {
            errorList.nameErr = validateFullName(name)
        } if (maxLength50(email)) {
            errorList.emailErr = maxLength50(email)
        } else if (validateEmail(email)) {
            errorList.emailErr = validateEmail(email)
        }

        setError(errorList)

        //================API Call Fuction================
        if (Object.keys(errorList).length == 0) {
            setError({});
            updateUserDetails()
        }
    }
    const updateUserDetails = () => {
        updateProfile(name, email)
            .then((response) => {
                let userUpdatedData = userData
                userUpdatedData.displayName = name
                userUpdatedData.email = email
                // dispatch(setUserData(userUpdatedData))
                dispatch(updateNameEmail(userUpdatedData))
                navigation.navigate('ToastMessageScreen', { title: 'Profile Updated Successfully!', navigate: 'ProfileScreen' })
            })
            .catch((error) => {

            })
    }

    return (
        <AppBackground>
            <AppHeader
                showBackButton
                title={'Edit Profile'}
            />
            <AppInput
                label={'Your Name'}
                placeholder={'Enter your Name'}
                required
                onChangeText={(name) => {
                    setName(name);
                    setError({ ...error, ['nameErr']: null })
                }}
                value={name}
                validate={[validateUserName]}
                error={error['nameErr']}

            />

            <AppInput
                label={'Email'}
                placeholder={'Enter your eamil'}
                onChangeText={(email) => {
                    setEmail(email)
                    setError({ ...error, ['emailErr']: null })
                }}
                required
                value={email}
                maxLength={50}
                validate={[maxLength50, validateEmail]}
                error={error['emailErr']}
            />

            <AppButton
                label={'UPDATE PROFILE'}
                containerStyle={{ position: 'absolute', bottom: 10 }}
                onPress={() => UpdateProfile()}
            />
        </AppBackground>
    )
}

export default EditProfile

const styles = StyleSheet.create({})