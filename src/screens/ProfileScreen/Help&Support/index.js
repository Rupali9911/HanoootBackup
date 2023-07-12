import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppBackground from '../../Components/AppBackground'
import AppHeader from '../../Components/AppHeader'
import AppInput from '../../../constant/AppInput'
import fonts from '../../../constant/fonts'
import Colors from '../../../constant/Colors'
import AppButton from '../../Components/AppButton'

const SupportScreen = () => {
    const [about, setAbout] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [emailErr, setEmailErr] = useState('')
    // const [aboutErr, setAboutErr] = useState('')
    const [error, setError] = useState('')

    const onSubmit = () => {
        let errorList = {};
        !email ?
            errorList["Email"] = 'Please enter your email address' :
            !about ? errorList["About"] = 'Please enter your query' :
                {};

        setError(errorList)
        if (Object.keys(errorList).length == 0) {
            setError({});
        }
    }


    return (
        <AppBackground>
            <AppHeader
                title={'Help & Support'}
                showBackButton

            />
            <AppInput
                label={'Name'}
                placeholder={'Enter your Name'}
                onChangeText={(name) => setName(name)}
                value={name}
            />
            <AppInput
                label={'Email'}
                placeholder={'Enter your Email'}
                required
                onChangeText={(email) => setEmail(email)}
                value={email}
                error={error['Email']}
                validate
            />
            <View style={styles.textAreaContainer}>
                <Text style={styles.label}>{'Let us know how can we help you'}{<Text style={{ color: 'red' }}>*</Text>}</Text>

                <TextInput
                    placeholder="Describe here"
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
                label={'Submit'}
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
        fontFamily: fonts.VisbyCF_Medium,
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
        letterSpacing: 0.5
    },
    textAreaContainer: {
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    errorMessage: {
        fontSize: 14,
        color: Colors.RED1,
        marginTop: 5,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
    },
})