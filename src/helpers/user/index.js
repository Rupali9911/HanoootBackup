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

export const updateNameWithSaveDetails = async (userCredentials, dispatch) => {
    if (userCredentials?.user) {
        await updateDisplayName(userCredentials, name)
        userCredentials.user.displayName = name
        saveUserDetails(userCredentials?.user, dispatch)
    }
    return
}