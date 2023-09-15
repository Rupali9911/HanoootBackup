import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppBackground from '../Components/AppBackground'
import Images from '../../constant/Images'
import fonts from '../../constant/fonts'
import Colors from '../../constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { signOut } from '../../services/socialAuth'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserData } from '../Store/actions/userAction'
import EncryptedStorage from 'react-native-encrypted-storage';
import { translate } from '../../utility'
import { googleLogout } from '../../services/socialAuth'
// import { WebView } from 'react-native-webview';


const ProfileScreen = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer.userData);


    useEffect(() => {
        // Add your side effect code here
        console.log('State changed:', userData);
    }, [userData]);


    // console.log('userData : ', userData)
    const signUpAction = () => {
        navigation.navigate('Signup')
    }

    const ProfileDetail = () => {
        return (
            <View style={styles.profileDetail}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{userData ? userData.displayName : translate('common.heythere,')}</Text>
                    <Text style={styles.userEmail}>{userData ? userData.email || userData.phoneNumber : translate('common.nicetomeetyou!')}</Text>
                </View>

                {
                    userData ?
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditProfileScreen')}>
                            <Image source={Images?.pencilIcon} style={styles.pencilImg} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.registerButton} onPress={() => signUpAction()}>
                            <Text style={styles.register}>{translate('common.register')}</Text>
                        </TouchableOpacity>
                }
            </View>
        );
    }

    const HeadingComponent = (props) => {
        return (
            <View style={{ margin: '5%' }}>
                <Text style={styles.heading}>{props.Title}</Text>
            </View>
        );
    }

    const ListItem = (props) => {
        return (
            <TouchableOpacity style={styles.listContainer} onPress={props.onPress}>
                <View style={styles.leftContainer}>
                    <Image
                        source={props.Image}
                        style={styles.icon}
                    />
                    <Text style={styles.listTitle}>{props.title}</Text>
                </View>
                {/* <Text style={styles.listTitle}>English</Text> */}
                <View>
                    <Image
                        source={Images.ForwardIcon}
                        style={styles.arrowIcon}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    const SocialIcon = (props) => {
        return (
            <TouchableOpacity
                onPress={props.onPress}
                style={{ margin: '5%' }}
            >
                <Image source={props.image} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    const logout = async () => {
        googleLogout()
        dispatch(clearUserData())
        await EncryptedStorage.clear();
        signOut()
            .then(async (response) => {
                console.log('user Logout Succesfully', response, userData)
            })
    }

    return (
        <AppBackground safeAreaColor={Colors.LightGray}>
            <ScrollView>
                <ProfileDetail />
                <HeadingComponent Title={translate('common.myaccount')} />
                {
                    userData ?
                        <>
                            <ListItem
                                Image={Images.BagIcon}
                                title={translate('common.myorders')}
                                onPress={() => navigation.navigate('OrderList')}
                            />
                            <ListItem
                                Image={Images.Wishlist}
                                title={translate('common.wishlist')}
                                onPress={() => navigation.navigate('WishlistScreen')}
                            />
                            <ListItem
                                Image={Images.Location}
                                title={translate('common.myaddress')}
                                onPress={() => navigation.navigate('MyAddress')}
                            />
                            <ListItem
                                Image={Images.Payment}
                                title={translate('common.paymentmethods')}
                                onPress={() => navigation.navigate('PaymentMethods')}
                            />
                        </> :
                        <ListItem
                            Image={Images.UserLogin}
                            title={translate('common.login')}
                            onPress={() => navigation.navigate('Login')}
                        />
                }

                <HeadingComponent Title={translate('common.setting')} />
                {
                    userData && userData?.phoneNumber === null && <ListItem
                        Image={Images.ChangePassword}
                        title={translate('common.changepassword')}
                        onPress={() => navigation.navigate('ChangePassword')}
                    />
                }

                <ListItem
                    Image={Images.Language}
                    title={translate('common.language')}
                    onPress={() => navigation.navigate('LanguageScreen')}
                />
                <ListItem
                    Image={Images.Notification}
                    title={translate('common.notification')}
                    onPress={() => navigation.navigate('NotificationScreen')}
                />
                <HeadingComponent Title={translate('common.about')} />
                <ListItem
                    Image={Images.Question}
                    title={translate('common.help&support')}
                    onPress={() => navigation.navigate('SupportScreen')}
                />
                <ListItem
                    Image={Images.Shield}
                    title={translate('common.legalandpolicies')}
                    onPress={() => navigation.navigate('LegalPolicies')}
                />
                <View style={styles.socialIconContainer}>
                    <SocialIcon
                        image={Images.Facebook}
                        onPress={() => { Linking.openURL('https://www.facebook.com/Hanooot.iq/') }}
                    />
                    <SocialIcon
                        image={Images.Instagram}
                        onPress={() => { Linking.openURL('https://www.instagram.com/hanooot.iq/') }}
                    />
                    <SocialIcon
                        image={Images.Tiktok}
                        onPress={() => { Linking.openURL('https://www.tiktok.com/@hanooot.iq') }}
                    />
                    {/* <SocialIcon
                        image={Images.Linkedin}
                    /> */}
                </View>
                {
                    userData &&
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => logout()}
                    >
                        <Text style={styles.logout}>{translate('common.logout')}</Text>
                    </TouchableOpacity>
                }

            </ScrollView>
        </AppBackground>


    )
}

export default ProfileScreen;



const styles = StyleSheet.create({
    profileDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%'
    },
    userName: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: fonts.VisbyCF_Bold,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    userEmail: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 500,
        letterSpacing: 0.5,
        color: Colors.GRAY2
    },
    pencilImg: {
        height: 24, width: 24, resizeMode: 'contain'
    },
    heading: {
        fontFamily: fonts.VISBY_CF_REGULAR,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        color: Colors.GRAY3
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        // paddingHorizontal: '5%',
        // paddingVertical: '3%'
        padding: '5%'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    listTitle: {
        fontFamily: fonts.VisbyCF_Demibold,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5,
        color: Colors.BLACK
    },
    arrowIcon: {
        width: 9,
        height: 14,
        resizeMode: 'contain',
        tintColor: Colors.GRAY2
    },
    socialIconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%'
    },
    logoutButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    logout: {
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5,
        color: Colors.GRAY3,
    },
    registerButton: {
        backgroundColor: Colors.themeColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // margin: 10,
        borderRadius: 100,
    },
    register: {
        color: Colors.WHITE,
        fontSize: 16,
        fontFamily: fonts.VisbyCF_Medium,
        fontWeight: 600,
        letterSpacing: 0.5
    },

})