import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import AppInput from '../../../constant/AppInput'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import AppButton from '../../Components/AppButton'
import { validateUserName, validateEmail, validateDescription, getFonts } from '../../utils'
import { helpNSupport } from '../../../services/apis'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../../utility'

const SupportScreen = () => {
    const [about, setAbout] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [emailErr, setEmailErr] = useState('')
    // const [aboutErr, setAboutErr] = useState('')
    const [error, setError] = useState('')
    const navigation = useNavigation()

    const onSubmit = () => {
        let errorList = {};
        // !email ?
        //     errorList["Email"] = 'Please enter your email address' :
        //     !about ? errorList["About"] = 'Please enter your query' :
        //         {};
        if (validateEmail(email)) {
            errorList["Email"] = validateEmail(email)
        }
        if (validateDescription(about)) {
            errorList["About"] = validateDescription(about)
        }
        setError(errorList)
        if (Object.keys(errorList).length == 0) {
            setError({});
            callHelpSupportAPI()
        }
    }

    const callHelpSupportAPI = () => {
        helpNSupport(name, email, about)
            .then(() => {
                navigation.goBack()
            })
    }


    return (
        <AppBackground>
            <AppHeader
                title={translate('common.help&support')}
                showBackButton

            />
            <AppInput
                label={translate('common.name')}
                placeholder={translate('common.enteryourname')}
                onChangeText={(name) => setName(name)}
                validate={[validateUserName]}
                value={name}
            />
            <AppInput
                label={translate('common.email')}
                placeholder={translate('common.enteryouremail')}
                required
                onChangeText={(email) => setEmail(email)}
                value={email}
                error={error['Email']}
                validate={[validateEmail]}
            />
            <View style={styles.textAreaContainer}>
                <Text style={styles.label}>{translate('common.letUsKnow')}{<Text style={{ color: 'red' }}>*</Text>}</Text>

                <TextInput
                    placeholder={translate('common.describehere')}
                    onChangeText={text => setAbout(text.slice(0, 200))}
                    value={about}
                    multiline={true}
                    numberOfLines={5}
                    style={styles.textAreaInput}
                    required
                    maxLength={200}
                // onFocus={}
                />
                {
                    error && <Text style={styles.errorMessage}>{error['About']}</Text>
                }

            </View>


            <AppButton
                label={translate('common.submit')}
                containerStyle={{ position: 'absolute', bottom: 10 }}
                view={name ? false : true}
                onPress={onSubmit}
            />
        </AppBackground>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    appInput: {
        // height: 230,
        textAlignVertical: 'top',
        borderRadius: 10,
        alignItems: 'flex-start',
        backgroundColor: 'white'

        // justifyContent: 'flex-start'
        // backgroundColor: 'red'
    },
    label: {
        fontFamily: getFonts.MEDIUM,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginBottom: 5,
        fontWeight: '500',
        color: Colors.BLACK
    },
    textAreaInput: {
        alignItems: 'center',
        height: 180,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 12,
        textAlignVertical: 'top',
        padding: 20,
        paddingTop: 20,
        lineHeight: 21,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    textAreaContainer: {
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    errorMessage: {
        fontSize: 14,
        color: Colors.RED1,
        marginTop: 5,
        fontFamily: getFonts.MEDIUM,
        fontWeight: 500,
    },
})