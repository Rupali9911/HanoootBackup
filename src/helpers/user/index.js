import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from '../../screens/Store/actions/userAction';
import { useDispatch } from 'react-redux';
import { updateDisplayName } from '../../services/socialAuth';

export const saveUserDetails = async (userDetails, dispatch) => {
    dispatch(setUserData(userDetails))
    await AsyncStorage.setItem(
        '@USERDATA',
        JSON.stringify(userDetails),
    );
    return
}

export const updateNameWithSaveDetails = async (userCredentials, name, dispatch) => {
    console.log('Name to updateNameWithSaveDetails', name)
    console.log('userCredentials', userCredentials)

    if (userCredentials?.user) {
        await updateDisplayName(userCredentials, name)
        let user = userCredentials.user
        console.log('User object', user)
        user.displayName = name
        console.log('User', user)
        saveUserDetails(user, dispatch)
    }
    return
}